from django.db import models
from django.utils import timezone
from app2_data.models import Job_Vacancy
from django.utils.translation import gettext_lazy as _
import os
from django.core.files.storage import default_storage
from django.core.exceptions import ValidationError


class Subscriber(models.Model):
    email = models.EmailField(unique=True)
    post_date = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return self.email


class Service(models.Model):
    post_date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class EngagementChoice(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    post_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to="engagement_images/")

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]

    def save(self, *args, **kwargs):
        if self.pk:
            try:
                existing_instance = EngagementChoice.objects.get(pk=self.pk)
                if existing_instance.image and existing_instance.image != self.image:
                    existing_instance.image.delete(save=False)
            except EngagementChoice.DoesNotExist:
                pass
        if self.image:
            self.rename_image()

        super(EngagementChoice, self).save(*args, **kwargs)

    def rename_image(self):
        extension = os.path.splitext(self.image.name)[1]
        filename = f"{self.pk}{extension}"
        self.image.name = os.path.join(filename)



class ContactFormSubmission(models.Model):
    COUNTRY_CHOICES = [
        ("nepal", "Nepal"),
        ("india", "India"),
        ("usa", "USA"),
    ]
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    country = models.CharField(choices=COUNTRY_CHOICES, default="nepal")
    engagement_type = models.ForeignKey(EngagementChoice, on_delete=models.CASCADE)
    services_needed = models.ManyToManyField("Service")
    phone_number = models.CharField(max_length=20)
    project_description = models.TextField()
    post_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name

    def save(self, *args, **kwargs):
        self.phone_number = self.get_country_code() + " " + self.phone_number
        super().save(*args, **kwargs)

    def get_country_code(self):
        country_code_map = {
            "nepal": "+977",
            "india": "+91",
            "usa": "+1",
        }
        return country_code_map.get(self.country.lower(), "")

    class Meta:
        ordering = ["-post_date"]







def upload_to_jobapplication(instance, filename):
    _, file_extension = os.path.splitext(filename)
    field_name = None
    
    if instance.photo and instance.photo.name == filename:
        field_name = "photo"
    elif instance.cv_or_resume and instance.cv_or_resume.name == filename:
        field_name = "cv_or_resume"
    elif instance.cover_letter and instance.cover_letter.name == filename:
        field_name = "cover_letter"
    else:
        field_name = "file"
    
    return f"jobapplication/{instance.id}/{field_name}{file_extension}"

class JobApplication(models.Model):
    COUNTRY_CHOICES = [
        ("nepal", "Nepal"),
        ("india", "India"),
        ("usa", "USA"),
    ]

    job = models.ForeignKey(Job_Vacancy, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    country = models.CharField(choices=COUNTRY_CHOICES, default="nepal", max_length=50)
    phone_number = models.CharField(max_length=20, unique=True)
    cv_or_resume = models.FileField(upload_to=upload_to_jobapplication)
    photo = models.FileField(upload_to=upload_to_jobapplication)
    cover_letter = models.FileField(upload_to=upload_to_jobapplication)
    post_date = models.DateTimeField(auto_now_add=True)
    relocate_to_pune = models.BooleanField(default=False)
    additional_question = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.full_name
