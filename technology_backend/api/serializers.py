from rest_framework import serializers
from app1_qrcode.models import VisitCardOrder
from app2_data.models import (
    Blog,
    Book,
    Category,
    Tag,
    Person,
    Location,
    JobApplicationStep,
    JobVacancy,
)
from app3_user.models import (
    Subscriber,
    Service,
    EngagementChoice,
    ContactFormSubmission,
)


class VisitCardOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitCardOrder
        fields = "__all__"


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = "__all__"


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = "__all__"


class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = "__all__"


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = "__all__"


class JobApplicationStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplicationStep
        fields = "__all__"


class JobVacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = JobVacancy
        fields = "__all__"


class JobVacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = JobVacancy
        fields = "__all__"


class JobApplicationStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplicationStep
        fields = "__all__"


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"


class EngagementChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = EngagementChoice
        fields = "__all__"


class ContactFormSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactFormSubmission
        fields = "__all__"
