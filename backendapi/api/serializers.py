from .models import Books
from rest_framework import serializers


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Books
        fields = ['id','book_Name','author_Name','Desc']