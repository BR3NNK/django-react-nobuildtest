from django.contrib import admin
from .models import React  # Importa o seu modelo

# Registra o modelo para que ele apareça no painel
admin.site.register(React)