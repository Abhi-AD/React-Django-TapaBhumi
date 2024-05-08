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
router.register(r'subscriber', views.SubscriberOrderView, 'subscriber')

urlpatterns = [
    path('visit/', include(router.urls)),
]