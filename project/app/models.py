from django.db import models

# Create your models here.
class React(models.Model):
    nome = models.CharField(max_length=100)
    cpf = models.CharField(max_length=11)