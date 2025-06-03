from rest_framework.views import APIView
from rest_framework import status
from django.contrib.auth.hashers import make_password
from .models import User
from .serializers import UserRegisterSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework import permissions
from Village_app.models import Village
from rest_framework import generics
from .models import VillageUpdateRequest
from .serializers import VillageUpdateRequestSerializer, ApproveVillageUpdateSerializer
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import HomeFeed, Comment
from .serializers import HomeFeedSerializer, CommentSerializer
from Citys_app.permissions import IsAuthenticatedOrReadOnlyWithAdminFullAccess
from .filters import HomeFeedFilter, CommentFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from .models import UserProfile
from .serializers import UserProfileSerializer
from rest_framework.permissions import AllowAny,IsAdminUser
from django.contrib.auth import get_user_model


User = get_user_model()

class UserRegisterView(APIView):
    """User Registration API"""
    permission_classes = [AllowAny]  # Ensure anyone can register
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                "user": UserRegisterSerializer(user).data,
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    """User Login API"""
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(email=email, password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                "user": UserRegisterSerializer(user).data,
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]  # Only authenticated users can log out

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]  # Get refresh token from request body
            token = RefreshToken(refresh_token)
            token.blacklist()  # Blacklist the token so it can't be used again
            return Response({"message": "Logout successful"}, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({"error": "Invalid refresh token"}, status=status.HTTP_400_BAD_REQUEST)
#  User requests an update to a village
class VillageUpdateRequestView(generics.CreateAPIView):
    queryset = VillageUpdateRequest.objects.all()
    serializer_class = VillageUpdateRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(requested_by=self.request.user)

#  Admin approves/rejects an update request
class ApproveVillageUpdateView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def patch(self, request, pk):
        try:
            update_request = VillageUpdateRequest.objects.get(pk=pk)
        except VillageUpdateRequest.DoesNotExist:
            return Response({"error": "Request not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = ApproveVillageUpdateSerializer(update_request, data=request.data, partial=True)
        permission_classes = [permissions.IsAdminUser] 
        if serializer.is_valid():
            if serializer.validated_data.get('status') == 'approved':
                # Apply changes to the village model
                if update_request.new_name:
                    update_request.village.name = update_request.new_name
                if update_request.new_description:
                    update_request.village.description = update_request.new_description
                update_request.village.save()
            
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class HomeFeedViewSet(viewsets.ModelViewSet):
    queryset = HomeFeed.objects.all().order_by('-created_at')
    serializer_class = HomeFeedSerializer
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = HomeFeedFilter
    ordering_fields = ['created_at', 'likes']
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)

    @action(detail=True, methods=['post'])
    def like(self, request, pk=None):
        post = self.get_object()
        post.likes += 1
        post.save()
        return Response({"message": "Post liked!", "likes": post.likes})

    @action(detail=True, methods=['post'])
    def share(self, request, pk=None):
        post = self.get_object()
        post.shares += 1
        post.save()
        return Response({"message": "Post shared!", "shares": post.shares})

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all().order_by('-created_at')
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = CommentFilter
    ordering_fields = ['created_at']

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)    

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]  

    def get_queryset(self):
        return UserProfile.objects.filter(user=self.request.user)  

    