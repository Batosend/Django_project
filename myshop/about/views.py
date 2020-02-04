from django.views.generic.base import TemplateView, TemplateResponseMixin


class AboutView(TemplateView, TemplateResponseMixin):
    template_name = "about/about.html"
