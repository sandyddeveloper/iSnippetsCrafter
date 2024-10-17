from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=190, null=True, blank=True)
    email = models.EmailField(_("email address"), max_length=100, unique=True, db_index=True)
    password = models.CharField(max_length=190, blank=True, null=True)
    username = None  # Remove username field

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  # No required fields except email

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
