from django.db import models
from django.utils import timezone

# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    post_date = models.DateTimeField(default=timezone.now)
    image  = models.ImageField(upload_to="blog_images/%Y/%m/%d", blank=False)

    def __str__(self):
        return self.title

class Book(models.Model):
    image  = models.ImageField(upload_to="book_images/%Y/%m/%d", blank=False)
    post_date = models.DateTimeField(default=timezone.now)
    title = models.CharField(max_length=255)
    
    def __str__(self):
        return self.title
    