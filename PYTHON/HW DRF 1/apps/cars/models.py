from core.models import BaseModel
from django.db import models
from django.core import validators as V
class CarModel(BaseModel):
    class Meta:
        db_table = 'cars'
    brand = models.CharField(max_length=30, validators=[V.MinLengthValidator(3), V.MaxLengthValidator(30)])
    price = models.IntegerField(V.MinLengthValidator(0))
    seats = models.IntegerField()
    body_type = models.CharField(max_length=20)
    engine_volume = models.FloatField()
    created_add = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
