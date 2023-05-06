from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from .serializers import BookSerializer
# from rest_framework.response import Response
from .models import Books
from rest_framework import viewsets


class ViewBooks(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Books.objects.all()





# @api_view(['GET','POST','PUT','DELETE'])
# def Booksviews(request,pk=None):
#     if request.method=='GET':
#         id=pk
#         if id is not None:
#             Books=Books.objects.get(id=id)
#             serializer=BookSerializer(Books)
#             return Response(serializer.data)
        
#         Books=Books.objects.all()
#         serializer=BookSerializer(Books,many=True)
#         return Response(serializer.data)


#     if request.method=='POST':
#         serializer=BookSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'msg':'data update'})
#         return Response(serializer.errors)
    


#     if request.method=='PUT':
#         id=pk
#         Books=Books.objects.get(id=id)
#         serializer=BookSerializer(Books,data=request.data,partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'msg':'data update'})
#         return Response(serializer.errors)

#     if request.method=='DELETE':
#         id=pk
#         Books=Books.objects.get(id=id)
#         Books.delete()
#         return Response({'msg':'Data Deleted'})

