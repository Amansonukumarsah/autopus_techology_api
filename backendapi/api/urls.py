from django.urls import path
from api import views
from rest_framework import routers
from api.views import ViewBooks

# books router
book_router = routers.SimpleRouter()
book_router.register('book',ViewBooks,basename='book',)
urlpatterns = book_router.urls


# urlpatterns = [
#     path('book/',views.Booksviews),
#     path('book/<int:pk>/',views.Booksviews),
# ]