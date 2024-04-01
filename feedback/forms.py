from django import forms
from .models import Feedback

class FeedbackForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields =['name','email','details']

    details=forms.CharField(widget=forms.Textarea)