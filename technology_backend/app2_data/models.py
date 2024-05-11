import os
from django.db import models
from django.utils import timezone
from django.core.exceptions import ValidationError
from django.urls import reverse

class Category(models.Model):
    name = models.CharField(max_length=100)
    post_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Blog(models.Model):
    title = models.CharField(max_length=255)
    bio = models.CharField(max_length=255)
    description = models.TextField()
    post_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to="Blog/")
    views_count = models.PositiveBigIntegerField(default=0)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, related_name="blogs", null=True, blank=True
    )
    tags = models.ManyToManyField(Tag, related_name="blogs", blank=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("blog_detail", args=[str(self.id)])
    
    def save(self, *args, **kwargs):
        if self.pk:
            try:
                existing_instance = Blog.objects.get(pk=self.pk)
                if existing_instance.image and existing_instance.image != self.image:
                    existing_instance.image.delete(save=False)
            except Blog.DoesNotExist:
                pass
        if self.image:
            self.rename_image()

        super(Blog, self).save(*args, **kwargs)

    def rename_image(self):
        extension = os.path.splitext(self.image.name)[1]
        filename = f"{self.pk}{extension}"
        self.image.name = os.path.join(filename)



class Question(models.Model):
    question_title = models.CharField(max_length=100)
    post_date = models.DateTimeField(auto_now_add=True)
    answer = models.TextField()

    def __str__(self):
        return self.question_title


def validate_linkedin_url(value):
    if not value.startswith("https://www.linkedin.com/in/"):
        raise ValidationError("Invalid LinkedIn URL")


class Person(models.Model):
    name = models.CharField(max_length=45)
    image = models.ImageField(upload_to="Person/")
    post = models.CharField(max_length=25)
    post_date = models.DateTimeField(auto_now_add=True)
    bio = models.CharField(max_length=255)
    blog = models.TextField()
    url = models.URLField(unique=True, validators=[validate_linkedin_url])

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if self.pk:
            try:
                existing_instance = Person.objects.get(pk=self.pk)
                if existing_instance.image and existing_instance.image != self.image:
                    existing_instance.image.delete(save=False)
            except Person.DoesNotExist:
                pass
        if self.image:
            self.rename_image()

        super(Person, self).save(*args, **kwargs)

    def rename_image(self):
        extension = os.path.splitext(self.image.name)[1]
        filename = f"{self.pk}{extension}"
        self.image.name = os.path.join(filename)



class Book(models.Model):
    chapter = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="Book/")
    post_date = models.DateTimeField(auto_now_add=True)
    questions = models.ManyToManyField(Question, related_name="books", blank=True)

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if self.pk:
            try:
                existing_instance = Book.objects.get(pk=self.pk)
                if existing_instance.image and existing_instance.image != self.image:
                    existing_instance.image.delete(save=False)
            except Book.DoesNotExist:
                pass
        if self.image:
            self.rename_image()

        super(Book, self).save(*args, **kwargs)

    def rename_image(self):
        extension = os.path.splitext(self.image.name)[1]
        filename = f"{self.pk}{extension}"
        self.image.name = os.path.join(filename)



class Location(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    post_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to="Location/")
    

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if self.pk:
            try:
                existing_instance = Location.objects.get(pk=self.pk)
                if existing_instance.image and existing_instance.image != self.image:
                    existing_instance.image.delete(save=False)
            except Location.DoesNotExist:
                pass
        
        if self.image:
            self.rename_image()
        
        super(Location, self).save(*args, **kwargs)

    def rename_image(self):
        extension = os.path.splitext(self.image.name)[1]
        new_filename = f"{self.id}{extension}"
        self.image.name = os.path.join(new_filename)



class JobApplicationStep(models.Model):
    num = models.PositiveIntegerField()
    title = models.CharField(max_length=100)
    post_date = models.DateTimeField(auto_now_add=True)
    description = models.TextField()
    image = models.ImageField(upload_to="Jobapplicationstep/")

    def __str__(self):
        return f"Step {self.num}: {self.title}"

    class Meta:
        ordering = ["-num"]
        
    def save(self, *args, **kwargs):
        if self.pk:
            try:
                existing_instance = JobApplicationStep.objects.get(pk=self.pk)
                if existing_instance.image and existing_instance.image != self.image:
                    existing_instance.image.delete(save=False)
            except JobApplicationStep.DoesNotExist:
                pass
        
        if self.image:
            self.rename_image()
        
        super(JobApplicationStep, self).save(*args, **kwargs)

    def rename_image(self):
        extension = os.path.splitext(self.image.name)[1]
        new_filename = f"{self.id}{extension}"
        self.image.name = os.path.join(new_filename)

class Job_Vacancy(models.Model):
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
        

class CaseStudy(models.Model):
    case_study_image = models.ImageField(upload_to="CaseStudy/")
    case_study_title = models.CharField(max_length=150)
    case_study_bio = models.CharField(max_length=255)
    views_count = models.PositiveBigIntegerField(default=0)
    case_study_description = models.TextField()
    post_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.case_study_title}'
    
    def save(self, *args, **kwargs):
        if self.pk:
            try:
                existing_instance = CaseStudy.objects.get(pk=self.pk)
                if existing_instance.case_study_image and existing_instance.case_study_image != self.case_study_image:
                    existing_instance.case_study_image.delete(save=False)
            except CaseStudy.DoesNotExist:
                pass
        if self.case_study_image:
            self.rename_image()

        super(CaseStudy, self).save(*args, **kwargs)

    def rename_image(self):
        extension = os.path.splitext(self.case_study_image.name)[1]
        filename = f"{self.pk}{extension}"
        self.case_study_image.name = os.path.join(filename)



    

