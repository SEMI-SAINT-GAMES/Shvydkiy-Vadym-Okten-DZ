from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404, GenericAPIView
from .models import (CarModel)
from django.forms import model_to_dict
from .serializers import CarSerializer
from rest_framework import status
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, CreateModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .filters import car_filtered_queryset

class CarListCreateView(ListCreateAPIView):
    # queryset = CarModel.objects.all()
    serializer_class = CarSerializer
    def get_queryset(self):
        return car_filtered_queryset(self.request.query_params)

class CarRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = CarModel.objects.all()
    serializer_class = CarSerializer

# class CarListCreateView(GenericAPIView, CreateModelMixin, ListModelMixin):
#     queryset = CarModel.objects.all()
#     serializer_class = CarSerializer
#
#     def get(self, request, *args, **kwargs):
#         return super().list(request, *args, **kwargs)
#     def post(self, request, *args, **kwargs):
#         return super().create(request, *args, **kwargs)
#
# class CarRetrieveUpdateDestroyView(GenericAPIView, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin):
#     queryset = CarModel.objects.all()
#     serializer_class = CarSerializer
#
#     def get(self, request, *args, **kwargs):
#         return super().retrieve(request, *args, **kwargs)
#
#     def put(self, request, *args, **kwargs):
#         return super().update(request, *args, **kwargs)
#
#     def patch(self, request, *args, **kwargs):
#         return super().partial_update(request, *args, **kwargs)
#
#     def delete(self, request, *args, **kwargs):
#         return super().destroy(request, *args, **kwargs)
    # def get(self, *args, **kwargs):
    #     car = self.get_object()
    #     serializer = self.serializer_class(car)
    #     return Response(serializer.data, status.HTTP_200_OK)
    # def put(self, *args, **kwargs):
    #     pk = kwargs['pk']
    #     data = self.request.data
    #     try:
    #         car = CarModel.objects.get(pk=pk)
    #     except CarModel.DoesNotExist:
    #         raise Http404()
    #     serializer = CarSerializer(car, data=data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data, status.HTTP_200_OK)
    #
    # def patch(self, *args, **kwargs):
    #     pk = kwargs['pk']
    #     data = self.request.data
    #     try:
    #         car = CarModel.objects.get(pk=pk)
    #     except CarModel.DoesNotExist:
    #         raise Http404()
    #     serializer = CarSerializer(car, data=data, partial=True)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data, status.HTTP_200_OK)
    #
    # def delete(self, *args, **kwargs):
    #     pk = kwargs['pk']
    #     try:
    #         car = CarModel.objects.get(pk=pk)
    #         car.delete()
    #     except CarModel.DoesNotExist:
    #         raise Http404()
    #     return Response(status=status.HTTP_204_NO_CONTENT)


