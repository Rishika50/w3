# yourappname/urls.py
from django.urls import path
from .views import home

urlpatterns = [
    path('', home, name='home'),  # This is the URL pattern for the home page
]
