import django_filters
from .models import HomeFeed, Comment

class HomeFeedFilter(django_filters.FilterSet):
    city = django_filters.CharFilter(field_name="city", lookup_expr='icontains')
    date_posted = django_filters.DateFilter(field_name="created_at", lookup_expr='date')

    class Meta:
        model = HomeFeed
        fields = ['city', 'date_posted']


class CommentFilter(django_filters.FilterSet):
    post = django_filters.NumberFilter(field_name="post__id", lookup_expr='exact')

    class Meta:
        model = Comment
        fields = ['post']
