# Generated by Django 4.0.2 on 2022-02-11 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='images',
            name='data',
            field=models.ImageField(upload_to='media/'),
        ),
        migrations.AlterField(
            model_name='minutes',
            name='data',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='seconds',
            name='data',
            field=models.FloatField(default=0),
        ),
    ]
