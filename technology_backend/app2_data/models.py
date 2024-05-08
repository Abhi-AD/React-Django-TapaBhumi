from django.db import models
from django.utils import timezone

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Blog(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField() 
    post_date = models.DateTimeField(default=timezone.now)
    image = models.ImageField(upload_to="blog_images/%Y/%m/%d", blank=False)
    views_count = models.PositiveBigIntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='blog', blank=True, null=True)
    tags = models.ManyToManyField(Tag, related_name='blog', blank=True)

    def __str__(self):
        return self.title


class Question(models.Model):
    qustion_title = models.CharField(max_length=100)
    answer = models.CharField(max_length=10000)

    def __str__(self):
        return self.qustion_title












class Book(models.Model):
    chapter = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    des1 = models.CharField(max_length=255)
    des2 = models.CharField(max_length=255)
    image = models.ImageField(upload_to="book_images/%Y/%m/%d", blank=False)
    post_date = models.DateTimeField(default=timezone.now)
    question = models.ManyToManyField(Question, related_name='book', blank=True)

    def __str__(self):
        return self.title
