from rest_framework import viewsets
from api.serializers import (
    VisitCardOrderSerializer,
    BlogSerializer,
    TagSerializer,
    CategorySerializer,
    BookSerializer,
)
from app1_qrcode.models import VisitCardOrder
from app2_data.models import Blog, Book, Tag, Category


class VisitCardOrderView(viewsets.ModelViewSet):
    serializer_class = VisitCardOrderSerializer
    queryset = VisitCardOrder.objects.all()


class BlogView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all().order_by("-post_date")


class CategoryView(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class TagView(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()


class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all().order_by("-post_date")[:3]
