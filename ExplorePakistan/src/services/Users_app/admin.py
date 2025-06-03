from django.contrib import admin
from .models import UserProfile,HomeFeed,Comment,User,VillageUpdateRequest

# Register your models here.
admin.site.register(UserProfile)
@admin.register(HomeFeed)
class HomeFeedAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'submitted_by', 'is_approved', 'created_at')
    list_filter = ('is_approved',)
    search_fields = ('title', 'content')
    actions = ['approve_selected']
admin.site.register(Comment)
admin.site.register(User)
admin.site.register(VillageUpdateRequest)

