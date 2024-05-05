from django.contrib import admin
from app1_qrcode.models import VisitCardOrder

class VisitCard(admin.ModelAdmin):
    list_display = ('name', 'email')

# Register your models here.

admin.site.register(VisitCardOrder, VisitCard)