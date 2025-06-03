from django.urls import path,include
from .views import UserRegisterView
from .views import UserLoginView
from .views import LogoutView
from .views import VillageUpdateRequestView, ApproveVillageUpdateView
from rest_framework.routers import DefaultRouter
from .views import HomeFeedViewSet, CommentViewSet
from .views import UserProfileViewSet
router = DefaultRouter()
router.register(r'homefeed', HomeFeedViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'user-profile', UserProfileViewSet, basename='user-profile')


    

urlpatterns = [
    path('', include(router.urls)),
    path('register', UserRegisterView.as_view(), name='register'), 
    path("login", UserLoginView.as_view(), name="login"),
    path('logout', LogoutView.as_view(), name='logout'),
    path('village-update-request', VillageUpdateRequestView.as_view(), name='village-update-request'),
    path('approve-village-update/<int:pk>', ApproveVillageUpdateView.as_view(), name='approve-village-update'),
]




