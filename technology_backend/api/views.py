from rest_framework import viewsets,status
from rest_framework.response import Response

from api.serializers import (
    VisitCardOrderSerializer,
    BlogSerializer,
    TagSerializer,
    CategorySerializer,
    BookSerializer,
    PersonSerializer,
    SubscriberSerializer
)

from app1_qrcode.models import VisitCardOrder
from app2_data.models import Blog, Book, Tag, Category,Person
from app3_user.models import Subscriber

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
    queryset = Book.objects.all().order_by("-post_date")

class PersonView(viewsets.ModelViewSet):
    serializer_class = PersonSerializer
    queryset = Person.objects.all().order_by("-post_date")
    


class SubscriberOrderView(viewsets.ViewSet):
    serializer_class = SubscriberSerializer

    def create(self, request):
        email = request.data.get('email', '').strip().lower()
        
        if Subscriber.objects.filter(email=email).exists():
            return Response({"detail": "Email already subscribed."}, status=status.HTTP_400_BAD_REQUEST)
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):
        subscribers = Subscriber.objects.all()
        serializer = self.serializer_class(subscribers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)