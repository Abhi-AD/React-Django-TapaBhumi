# Generated by Django 5.0.4 on 2024-05-08 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app2_data', '0017_location_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobApplicationStep',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.PositiveIntegerField()),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
            ],
            options={
                'ordering': ['-num'],
            },
        ),
    ]
