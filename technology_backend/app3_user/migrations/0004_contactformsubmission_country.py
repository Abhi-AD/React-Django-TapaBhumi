# Generated by Django 5.0.4 on 2024-05-09 12:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app3_user', '0003_alter_engagementchoice_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactformsubmission',
            name='country',
            field=models.CharField(choices=[('nepal', 'Nepal'), ('india', 'India'), ('usa', 'USA')], default='nepal', max_length=20),
        ),
    ]
