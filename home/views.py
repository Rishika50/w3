

# Create your views here.
# yourappname/views.py
from django.shortcuts import render

def home(request):
    return render(request, 'home/template.html')
