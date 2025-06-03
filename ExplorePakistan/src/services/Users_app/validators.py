from django.core.exceptions import ValidationError
import re

def validate_strong_password(value):
    """ 
    Validate password: Minimum 8 characters, at least one letter, one number, and one special character.
    """
    if len(value) < 8:
        raise ValidationError("Password must be at least 8 characters long.")
    
    if not re.search(r'[A-Za-z]', value):  # At least one letter
        raise ValidationError("Password must contain at least one letter.")
    
    if not re.search(r'\d', value):  # At least one number
        raise ValidationError("Password must contain at least one number.")
    
    if not re.search(r'[!@#$%^&*(),.?":{}|<>]', value):  # At least one special character
        raise ValidationError("Password must contain at least one special character.")
    
    return value
