from django.contrib import admin
from app2_data.models import (
    Blog,
    Book,
    Category,
    Tag,
    Question,
    Person,
    Location,
    JobApplicationStep,
    JobVacancy,
)


admin.site.register(Blog)
admin.site.register(Book)
admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Question)
admin.site.register(Person)
admin.site.register(Location)
admin.site.register(JobApplicationStep)
admin.site.register(JobVacancy)
