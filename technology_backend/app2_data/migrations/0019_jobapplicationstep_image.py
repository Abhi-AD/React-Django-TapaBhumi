# Generated by Django 5.0.4 on 2024-05-08 16:29

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app2_data', '0018_jobapplicationstep'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobapplicationstep',
            name='image',
            field=models.ImageField(default=datetime.datetime(2024, 5, 8, 16, 29, 6, 507061, tzinfo=datetime.timezone.utc), upload_to='location_images/%Y/%m/%d'),
            preserve_default=False,
        ),
    ]
