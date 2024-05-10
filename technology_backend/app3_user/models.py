from django.db import models
from django.utils import timezone
from app2_data.models import Job_Vacancy
from django.db import models
from django.utils.translation import gettext_lazy as _

class Subscriber(models.Model):
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.email


class Service(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class EngagementChoice(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to="engagement_images/%Y/%m/%d")

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]


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
    post_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.full_name

    def save(self, *args, **kwargs):
        self.phone_number = self.get_country_code()+ " " + self.phone_number
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


