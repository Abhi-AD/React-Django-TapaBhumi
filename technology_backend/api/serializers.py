from rest_framework import serializers
from app1_qrcode.models import VisitCardOrder
from app2_data.models import Blog,Book

class VisitCardOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitCardOrder
        fields = ("__all__")

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ("__all__")

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ("__all__")
