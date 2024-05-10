# Generated by Django 5.0.4 on 2024-05-10 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app2_data', '0023_person_bio'),
    ]

    operations = [
        migrations.CreateModel(
            name='CaseStudy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('case_study_image', models.ImageField(upload_to='study_image/%Y/%m/%d')),
                ('case_study_title', models.CharField(max_length=150)),
                ('case_study_bio', models.CharField(max_length=255)),
                ('views_count', models.PositiveBigIntegerField(default=0)),
                ('case_study_description', models.TextField()),
                ('post_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]