# Generated by Django 4.2.5 on 2024-05-05 15:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='VisitCardOrder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=20)),
                ('website', models.URLField()),
                ('address_line_1', models.CharField(max_length=255)),
                ('address_line_2', models.CharField(max_length=255)),
            ],
            options={
                'verbose_name': 'Visit Card Order',
                'verbose_name_plural': 'Visit Card Orders',
            },
        ),
    ]