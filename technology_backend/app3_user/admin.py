from django.contrib import admin
from app3_user.models import (
    Subscriber,
    Service,
    EngagementChoice,
    ContactFormSubmission,
    JobApplication,
)

admin.site.register(Subscriber)
admin.site.register(Service)
admin.site.register(EngagementChoice)
admin.site.register(ContactFormSubmission)
admin.site.register(JobApplication)
