from statistics import mode
from django.db import models

# Create your models here.
class Seconds(models.Model):
	data = models.FloatField(default=0, blank=False)

class Minutes(models.Model):
    data = models.FloatField(default=0, blank=False)

class Images(models.Model):
    data = models.ImageField(upload_to ='media/', blank=False)

class Params(models.Model):
    minMos = models.FloatField(default=3, blank=False)
    maxMos = models.FloatField(default=5, blank=False)