# Generated by Django 5.0.4 on 2024-05-09 11:50

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app3_user', '0002_engagementchoice_service_contactformsubmission'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='engagementchoice',
            options={'ordering': ['name']},
        ),
        migrations.AddField(
            model_name='engagementchoice',
            name='image',
            field=models.ImageField(default=datetime.datetime(2024, 5, 9, 11, 50, 5, 947161, tzinfo=datetime.timezone.utc), upload_to='engagement_images/%Y/%m/%d'),
            preserve_default=False,
        ),
    ]