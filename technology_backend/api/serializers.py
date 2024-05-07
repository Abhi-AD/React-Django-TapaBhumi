from rest_framework import serializers
from app1_qrcode.models import VisitCardOrder

class VisitCardOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitCardOrder
        fields = ('id', 'name','post', 'email', 'phone', 'website', 'address_line_1', 'address_line_2')
