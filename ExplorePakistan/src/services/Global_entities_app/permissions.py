from rest_framework import permissions

class IsAuthenticatedOrReadOnlyWithAdminFullAccess(permissions.BasePermission):
    """
    Custom permission:
    - Allow GET requests for everyone (unauthenticated users).
    - Allow full access to admin users (is_staff=True or is_superuser=True).
    - Allow all actions except DELETE for authenticated users.
    """

    def has_permission(self, request, view):
        # Allow GET requests for everyone
        if request.method in permissions.SAFE_METHODS:
            return True

        # Allow full access to admin users (superusers and staff)
        if request.user and (request.user.is_staff or request.user.is_superuser):
            return True
        
        # Allow authenticated users to perform all actions except DELETE
        if request.user and request.user.is_authenticated:
            return request.method != "DELETE"

        # Deny access by default
        return False
