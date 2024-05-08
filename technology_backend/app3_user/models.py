from django.db import models
from django.utils import timezone


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

    def __str__(self):
        return self.name


class ContactFormSubmission(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    engagement_type = models.ForeignKey(EngagementChoice, on_delete=models.CASCADE)
    services_needed = models.ManyToManyField("Service")
    phone_number = models.CharField(max_length=20)
    project_description = models.TextField()
    post_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.full_name

    class Meta:
        ordering = ["-post_date"]
