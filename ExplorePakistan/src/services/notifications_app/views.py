from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Notification
from .serializers import NotificationSerializer

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all().order_by('-created_at')
    serializer_class = NotificationSerializer
    permission_classes = [permissions.IsAuthenticated]  # Only logged-in users can access

    def get_queryset(self):
        """Return only notifications for the logged-in user."""
        return Notification.objects.filter(user=self.request.user)


# Create your views here.
