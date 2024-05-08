# Generated by Django 5.0.4 on 2024-05-07 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app2_data', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='book_images/%Y/%m/%d')),
                ('post_date', models.DateTimeField()),
                ('title', models.CharField(max_length=255)),
            ],
        ),
    ]