from django.db import models
from django.contrib.auth import get_user_model
from Users_app.models import User

# Import HomeFeed model
from Users_app.models import HomeFeed  

User = get_user_model()

class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notifications")  # User who gets the notification
    post = models.ForeignKey(HomeFeed, on_delete=models.CASCADE, related_name="notifications")  # Post that triggered notification
    message = models.TextField()  # Notification message
    created_at = models.DateTimeField(auto_now_add=True) # Timestamp
    is_read = models.BooleanField(default=False)  # Is notification read by user
    

    def __str__(self):
        return f"Notification for {self.user.username} - {self.message}"
