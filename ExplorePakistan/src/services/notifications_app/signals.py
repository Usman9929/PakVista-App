from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import HomeFeed, Notification

@receiver(post_save, sender=HomeFeed)
def create_notification(sender, instance, created, **kwargs):
    if created:
        Notification.objects.create(
            user=instance.user,  # Notify the post owner
            post=instance,
            message=f"{instance.user.username} created a new post: {instance.content[:50]}"  # Short preview
        )
