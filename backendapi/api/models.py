from django.db import models

from django.db import models

class Books(models.Model):
    id=models.AutoField(primary_key=True)
    book_Name=models.CharField(max_length=100)
    author_Name=models.CharField(max_length=100)
    Desc=models.TextField()
  