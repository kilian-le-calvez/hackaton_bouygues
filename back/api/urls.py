from django.urls import include, re_path
from django.contrib import admin
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = 'api'

urlpatterns = [
    re_path('images/', views.images.as_view()),
    re_path('fluxData/', views.fluxData.as_view()),
    re_path('paramsView/', views.paramsView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
