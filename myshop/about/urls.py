from django.conf.urls import url
from about.views import AboutView

app_name = 'about'

urlpatterns = [
    url(r'^about/', AboutView.as_view(), name="about"),

]
