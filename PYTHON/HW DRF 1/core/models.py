from django.db import models

class BaseModel(models.Model):
    class Meta:
        abstract = True

    created_add = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)