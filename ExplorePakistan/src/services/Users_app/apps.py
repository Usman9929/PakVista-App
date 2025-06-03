from django.apps import AppConfig

class UsersAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Users_app'

    def ready(self):
        import Users_app.signals  # Ensure this is imported
