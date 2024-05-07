from rest_framework import viewsets
from api.serializers import VisitCardOrderSerializer, BlogSerializer,BookSerializer
from app1_qrcode.models import VisitCardOrder
from app2_data.models import Blog,Book


class VisitCardOrderView(viewsets.ModelViewSet):
    serializer_class = VisitCardOrderSerializer
    queryset = VisitCardOrder.objects.all()


class BlogView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all().order_by("-post_date")[2:]



class BlogLatestView(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blog.objects.all().order_by("-post_date")[:2]

class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all().order_by("-post_date")[:3]
