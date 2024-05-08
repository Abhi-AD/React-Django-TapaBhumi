# Generated by Django 5.0.4 on 2024-05-08 08:32

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app2_data', '0007_alter_blog_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qustion_title', models.CharField(max_length=100)),
                ('answer', models.CharField(max_length=10000)),
            ],
        ),
        migrations.AddField(
            model_name='book',
            name='des1',
            field=models.CharField(default=datetime.datetime(2024, 5, 8, 8, 32, 51, 909037, tzinfo=datetime.timezone.utc), max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='book',
            name='des2',
            field=models.CharField(default=datetime.datetime(2024, 5, 8, 8, 32, 55, 567361, tzinfo=datetime.timezone.utc), max_length=255),
            preserve_default=False,
        ),
    ]
