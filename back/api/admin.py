from django.contrib import admin
from django.forms import ImageField
from api.models import *

# Register your models here.
admin.site.register(Seconds)
admin.site.register(Minutes)
admin.site.register(Images)
admin.site.register(Params)