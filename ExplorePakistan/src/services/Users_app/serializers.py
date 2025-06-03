from rest_framework import serializers
from .models import User
from Citys_app.models import province,Division,District,City
from Village_app.models import Village
from .models import VillageUpdateRequest
from django.core.exceptions import ValidationError
from .validators import  validate_strong_password
from .models import HomeFeed, Comment
from .models import UserProfile


from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

User = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    confirm_password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'confirm_password', 'user_type', 'first_name', 'last_name']

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({"password": "Passwords do not match!"})
        
        # Prevent users from setting 'Admin' as user_type
        if data['user_type'].lower() == 'admin':
            raise serializers.ValidationError({"user_type": "Invalid user type selection."})

        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')  # Remove confirm_password before saving
        validated_data['password'] = make_password(validated_data['password'])  # Hash password
        return User.objects.create(**validated_data)

class VillageUpdateRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = VillageUpdateRequest
        fields = '__all__'
        read_only_fields = ['requested_by', 'status']

# Used by admins to approve or reject village update requests.
class ApproveVillageUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = VillageUpdateRequest
        fields = ['status']



class HomeFeedSerializer(serializers.ModelSerializer):
    user_name = serializers.ReadOnlyField(source='user.username')  
    comments_count = serializers.ReadOnlyField()

    class Meta:
        model = HomeFeed
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class CommentSerializer(serializers.ModelSerializer):
    user_name = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Comment
        fields = '__all__'
        
from rest_framework import serializers
from .models import UserProfile

from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = UserProfile
        fields = "__all__"
