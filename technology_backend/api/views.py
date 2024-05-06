from rest_framework import viewsets
from api.serializers import VisitCardOrderSerializer
from app1_qrcode.models import VisitCardOrder

class VisitCardOrderView(viewsets.ModelViewSet):
    serializer_class = VisitCardOrderSerializer
    queryset = VisitCardOrder.objects.all()
