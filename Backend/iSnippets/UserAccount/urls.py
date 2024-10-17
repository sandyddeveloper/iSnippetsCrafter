from django.urls import path, include
from .views import RegisterViews, LoginViews, UserView, LogoutViews


urlpatterns = [
    path('register/', RegisterViews.as_view()),
    path('login/', LoginViews.as_view()),
    path('user/', UserView.as_view()),
    path('logout/', LogoutViews.as_view()),
    path('accounts/', include('allauth.urls')),

   
]