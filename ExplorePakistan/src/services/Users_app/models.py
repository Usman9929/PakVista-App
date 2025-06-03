from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin,Group,Permission
from django.db import models 
from Citys_app.models import province,Division,District,City
from Village_app.models import Village
from .validators import validate_strong_password


from django.conf import settings
class UserType(models.TextChoices):
    REGULAR = 'Regular', 'Regular User'
    VENDOR = 'Vendor', 'Vendor'
    CUSTOMER = 'Customer', 'Customer'
    ADMIN = 'Admin', 'Administrator'  # You can hide this in the registration form

class UserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, username, password, **extra_fields)




class User(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255 ,
        validators=[validate_strong_password],
        help_text="Password must contain at least 8 characters, including uppercase, lowercase, and numbers."
    )
    
    user_type = models.CharField(
        max_length=50,
        choices=[
            ("Regular", "Regular User"),
            ("Vendor", "Vendor"),
            ("Moderator", "Moderator"),
        ],
        default="Regular"
    )

    village = models.ForeignKey(Village, on_delete=models.SET_NULL,null=True, blank=True)
    city= models.ForeignKey(City, on_delete=models.SET_NULL, null=True, blank=True)
    district = models.ForeignKey(District, on_delete=models.SET_NULL, null=True, blank=True)
    division= models.ForeignKey(Division, on_delete=models.SET_NULL, null=True, blank=True)
    province= models.ForeignKey(province, on_delete=models.SET_NULL, null=True, blank=True) 

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email



class VillageUpdateRequest(models.Model):
    village = models.CharField(max_length=255)
    requested_by = models.ForeignKey(User, on_delete=models.CASCADE)
    new_name = models.CharField(max_length=255, null=True, blank=True)
    new_description = models.TextField(null=True, blank=True)
    status = models.CharField(
        max_length=20,
        choices=[('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')],
        default='pending'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Update Request for {self.village} by {self.requested_by.username}"
class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="profile")
    profile_image = models.ImageField(upload_to="profile_images/", null=True, blank=True)
    bio = models.TextField(blank=True)
    saved_villages = models.JSONField(default=list, blank=True)  
    recent_activities = models.JSONField(default=list, blank=True)  
    notification_settings = models.JSONField(default=dict, blank=True)  

    def __str__(self):
        return self.user.username
    



class HomeFeed(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name="home_feeds")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    village = models.ForeignKey(Village,on_delete=models.CASCADE, blank=True, null=True)
    title = models.CharField(max_length=255)
    content = models.TextField()
    image = models.ImageField(upload_to='home_feed_images/', blank=True, null=True)
    likes = models.PositiveIntegerField(default=0)
    comments_count = models.PositiveIntegerField(default=0)
    shares = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.SET_NULL, null=True, blank=True, related_name="submitted_home_feeds")
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(HomeFeed, related_name="comments", on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}: {self.text[:20]}"






