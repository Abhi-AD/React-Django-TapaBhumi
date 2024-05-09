from django.db import models
from django.utils import timezone
from django.core.exceptions import ValidationError
from django.urls import reverse
from django.contrib.postgres.fields import JSONField

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
    image = models.ImageField(upload_to="blog_images/%Y/%m/%d")
    views_count = models.PositiveBigIntegerField(default=0)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, related_name="blogs", null=True, blank=True
    )
    tags = models.ManyToManyField(Tag, related_name="blogs", blank=True)

    def __str__(self):
        return self.category.name

    def get_absolute_url(self):
        return reverse("blog_detail", args=[str(self.id)])


class Question(models.Model):
    question_title = models.CharField(max_length=100)
    answer = models.TextField()

    def __str__(self):
        return self.question_title


def validate_linkedin_url(value):
    if not value.startswith("https://www.linkedin.com/in/"):
        raise ValidationError("Invalid LinkedIn URL")


class Person(models.Model):
    name = models.CharField(max_length=45)
    image = models.ImageField(upload_to="people_images/%Y/%m/%d")
    post = models.CharField(max_length=25)
    post_date = models.DateTimeField(default=timezone.now)
    blog = models.TextField()
    url = models.URLField(unique=True, validators=[validate_linkedin_url])

    def __str__(self):
        return self.name


class Book(models.Model):
    chapter = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="book_images/%Y/%m/%d")
    post_date = models.DateTimeField(default=timezone.now)
    questions = models.ManyToManyField(Question, related_name="books", blank=True)

    def __str__(self):
        return self.title


class Location(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    post_date = models.DateTimeField(default=timezone.now)
    image = models.ImageField(upload_to="location_images/%Y/%m/%d")
    

    def __str__(self):
        return self.name




class JobApplicationStep(models.Model):
    num = models.PositiveIntegerField()  # Step number
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to="jobapplication_images/%Y/%m/%d")
    

    def __str__(self):
        return f"Step {self.num}: {self.title}"
    class Meta:
        ordering = ["-num"]


class JobVacancy(models.Model):
    vacancy_title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    vacancy_des = models.TextField()
    vacancy_requirements = models.TextField()
    roles = models.TextField()
    vacancy_skills = models.TextField()
    vacancy_salary = models.DecimalField(max_digits=10, decimal_places=2)
    post_date = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
        return f'{self.vacancy_title }-----{self.location}' 

    class Meta:
        verbose_name_plural = "Vacancies"
        ordering = ["-post_date"]
        
        