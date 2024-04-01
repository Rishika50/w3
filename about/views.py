from django.shortcuts import render

# Create your views here.
# yourappname/views.py
from django.shortcuts import render

def about(request):
    about_content = "This is the about page content."
    return render(request, 'about/about.html', {'about_content': about_content})
