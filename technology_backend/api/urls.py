from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'visit', views.VisitCardOrderView, 'visit')
router.register(r'blog', views.BlogView, 'blog')
router.register(r'book', views.BookView, 'book')
router.register(r'category', views.CategoryView, 'category')
router.register(r'tag', views.TagView, 'tag')
router.register(r'person', views.PersonView, 'person')
router.register(r'subscriber', views.SubscriberOrderView, 'subscriber')
router.register(r'location', views.LocationView, 'location')
router.register(r'jobapplication', views.JobApplicationStepView, 'jobapplication')
router.register(r'jobvacancy', views.JobVacancyView, 'jobvacancy')
# router.register(r'job-vacancy/<int:id>', views.JobVacancyDetailView, 'job-vacancy')
router.register(r'service', views.ServiceView, 'service')
router.register(r'engagementchoice', views.EngagementChoiceView, 'engagementchoice')
router.register(r'contact', views.ContactFormSubmissionView, 'contact')

urlpatterns = [
    path('visit/', include(router.urls)),
]