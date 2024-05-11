from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status,generics
from rest_framework.response import Response

from api.serializers import (
    VisitCardOrderSerializer,
    BlogSerializer,
    TagSerializer,
    CategorySerializer,
    BookSerializer,
    PersonSerializer,
    SubscriberSerializer,
    LocationSerializer,
    JobApplicationStepSerializer,
    Job_VacancySerializer,
    ServiceSerializer,
    EngagementChoiceSerializer,
    ContactFormSubmissionSerializer,
    CaseStudySerializer,
    JobApplicationSerializer,
)

from app1_qrcode.models import VisitCardOrder
from app2_data.models import (
    Blog,
    Book,
    Tag,
    Category,
    Person,
    Location,
    JobApplicationStep,
    Job_Vacancy,
    CaseStudy,
)
from app3_user.models import (
    Subscriber,
    Service,
    EngagementChoice,
    ContactFormSubmission,
    JobApplication
)


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


class LocationView(viewsets.ModelViewSet):
    serializer_class = LocationSerializer
    queryset = Location.objects.all().order_by("-post_date")


class JobApplicationStepView(viewsets.ModelViewSet):
    serializer_class = JobApplicationStepSerializer
    queryset = JobApplicationStep.objects.all().order_by("num")


class Job_VacancyView(viewsets.ModelViewSet):
    serializer_class = Job_VacancySerializer
    queryset = Job_Vacancy.objects.all().order_by("-post_date")

class JobApplicationView(viewsets.ModelViewSet):
    serializer_class = JobApplicationSerializer
    queryset = JobApplication.objects.all()


class CaseStudyView(viewsets.ModelViewSet):
    serializer_class = CaseStudySerializer
    queryset = CaseStudy.objects.all().order_by("-post_date")




class ServiceView(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()


class EngagementChoiceView(viewsets.ModelViewSet):
    serializer_class = EngagementChoiceSerializer
    queryset = EngagementChoice.objects.all()


class ContactFormSubmissionView(viewsets.ModelViewSet):
    serializer_class = ContactFormSubmissionSerializer
    queryset = ContactFormSubmission.objects.all().order_by("-post_date")


class SubscriberOrderView(viewsets.ViewSet):
    serializer_class = SubscriberSerializer

    def create(self, request):
        email = request.data.get("email", "").strip().lower()

        if Subscriber.objects.filter(email=email).exists():
            return Response(
                {"detail": "Email already subscribed."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request):
        subscribers = Subscriber.objects.all()
        serializer = self.serializer_class(subscribers, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
