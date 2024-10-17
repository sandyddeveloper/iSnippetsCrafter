

from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

SITE_ID = 1  


SECRET_KEY = os.getenv('DJANGO_SECRET_KEY', 'django-insecure-pybq1nxf4l6#n^lt&nf&!8oqei#nz3)yk^m265dh!1i1bd1^^n')

DEBUG = os.getenv('DJANGO_DEBUG', True)

ALLOWED_HOSTS = os.getenv('DJANGO_ALLOWED_HOSTS', '').split(',') if os.getenv('DJANGO_ALLOWED_HOSTS') else []




INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'UserAccount',
    'django.contrib.sites',  # required for allauth
    'allauth',               # allauth app
    'allauth.account',       # core authentication
    'allauth.socialaccount', # social login
    'allauth.socialaccount.providers.google',  # Google provider
    'allauth.socialaccount.providers.github',  # GitHub provider
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'allauth.account.middleware.AccountMiddleware',  # Add this line for allauth
]


AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend',  # required for allauth
]

ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_EMAIL_VERIFICATION = 'optional'

SOCIALACCOUNT_PROVIDERS = {
    'google': {
        'SCOPE': ['profile', 'email'],
        'AUTH_PARAMS': {'access_type': 'online'},
    },
    'github': {
        'SCOPE': ['user', 'repo', 'read:org'],
        'AUTH_PARAMS': {'scope': 'user:email'},
    }
}

LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'

ROOT_URLCONF = 'iSnippets.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],  # Add template directory if you need custom templates
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'iSnippets.wsgi.application'


# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.mysql',
#         'NAME': 'isnippets_db',
#         'USER': 'root',
#         'PASSWORD': 'root123',
#         'HOST': 'localhost',
#         'PORT': '3306',
#         'OPTIONS': {
#             'charset': 'utf8mb4',
#             'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
#         },
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}




APPEND_SLASH = False


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]




LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True




STATIC_URL = 'static/'

AUTH_USER_MODEL = 'UserAccount.User'

CORS_ORIGIN_ALLOW_ALL = True
CORS_ORIGIN_CREDENTIALS = True

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
