from django.contrib import admin
from app2_data.models import Blog,Book,Category,Tag,Question


admin.site.register(Blog)
admin.site.register(Book)
admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Question)