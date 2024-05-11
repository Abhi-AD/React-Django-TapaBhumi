# Generated by Django 5.0.4 on 2024-05-11 16:11

import app3_user.models
import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app2_data', '0026_category_post_date_jobapplicationstep_post_date_and_more'),
        ('app3_user', '0005_alter_contactformsubmission_country'),
    ]

    operations = [
        migrations.AddField(
            model_name='engagementchoice',
            name='post_date',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2024, 5, 11, 16, 11, 7, 77183, tzinfo=datetime.timezone.utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='service',
            name='post_date',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2024, 5, 11, 16, 11, 9, 94487, tzinfo=datetime.timezone.utc)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='subscriber',
            name='post_date',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2024, 5, 11, 16, 11, 10, 954349, tzinfo=datetime.timezone.utc)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='contactformsubmission',
            name='post_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='engagementchoice',
            name='image',
            field=models.ImageField(upload_to='engagement_images/'),
        ),
        migrations.CreateModel(
            name='JobApplication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('country', models.CharField(choices=[('nepal', 'Nepal'), ('india', 'India'), ('usa', 'USA')], default='nepal', max_length=50)),
                ('phone_number', models.CharField(max_length=20, unique=True)),
                ('cv_or_resume', models.FileField(upload_to=app3_user.models.upload_to_jobapplication)),
                ('photo', models.FileField(upload_to=app3_user.models.upload_to_jobapplication)),
                ('cover_letter', models.FileField(upload_to=app3_user.models.upload_to_jobapplication)),
                ('post_date', models.DateTimeField(auto_now_add=True)),
                ('relocate_to_pune', models.BooleanField(default=False)),
                ('additional_question', models.TextField(blank=True, null=True)),
                ('job', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app2_data.job_vacancy')),
            ],
        ),
    ]
