from django.db import models

class CarModel(models.Model):
    class Meta:
        db_table = 'cars'
    brand = models.CharField(max_length=30)
    price = models.IntegerField()
    seats = models.IntegerField()
    body_type = models.CharField(max_length=20)
    engine_volume = models.FloatField()
