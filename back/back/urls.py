from django.urls import include, re_path
from django.contrib import admin
from api import urls as apiUrls

urlpatterns = [
    re_path(r'^admin/', admin.site.urls),
    re_path('api/', include('api.urls', namespace='api')),
]