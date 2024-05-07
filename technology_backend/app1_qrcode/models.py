from django.db import models

class VisitCardOrder(models.Model):
    name = models.CharField(max_length=255)
    post = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20) 
    website = models.URLField()
    address_line_1 = models.CharField(max_length=255)
    address_line_2 = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name  

    class Meta:
        verbose_name = "Visit Card Order"
        verbose_name_plural = "Visit Card Orders"
