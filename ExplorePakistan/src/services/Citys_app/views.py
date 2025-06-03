from django.shortcuts import render
from .models import province, Division, District, City,RegionEvent,CulturalFestival,RegionalEvent,FolkFestival,NationalEvent,GlobalEvent,AdventureEvent,ReligiousFestival,EmergencyContact,PoliceStation,FireStation,MedicalEmergency
from rest_framework import viewsets
from .api_file.serializers import provinceSerlizers,DivisionSerializer, DistrictSerializer, CitySerializer,RegionalEventSerializer,CulturalFestivalSerializer,RegionEventSerializer,FolkFestivalSerializer,NationalEventSerializer,GlobalEventSerializer,AdventureEventSerializer,ReligiousFestivalSerializer,EmergencyContactSerializer,PoliceStationSerializer,FireStationSerializer,MedicalEmergencySerializer
from .filters import ProvinceFilter, DivisionFilter, DistrictFilter ,CityFilter,RegionEventFilter,CulturalFestivalFilter,RegionalEventFilter,FolkFestivalFilter,NationalEventFilter,GlobalEventFilter,AdventureEventFilter,ReligiousFestivalFilter,EmergencyContactFilter,PoliceStationFilter,FireStationFilter,MedicalEmergencyFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter
from rest_framework_simplejwt.authentication import JWTAuthentication
from .permissions import IsAuthenticatedOrReadOnlyWithAdminFullAccess
class ProvinceViewSet(viewsets.ModelViewSet):
    queryset = province.objects.all()  # Ensure this is a queryset, not a tuple
    serializer_class = provinceSerlizers
    filter_backends = [DjangoFilterBackend,OrderingFilter]
    filterset_class = ProvinceFilter
    ordering_fields = ['provinces_name']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]

class DivisionViewSet(viewsets.ModelViewSet):
    queryset = Division.objects.all()
    serializer_class = DivisionSerializer
    filter_backends = [ DjangoFilterBackend,OrderingFilter]
    filterset_class = DivisionFilter
    ordering_fields = ['Division_name']
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    authentication_classes = [JWTAuthentication]

class DistrictViewSet(viewsets.ModelViewSet):
    queryset = District.objects.all()
    serializer_class = DistrictSerializer
    filter_backends = [DjangoFilterBackend,OrderingFilter]
    filterset_class = DistrictFilter
    ordering_fields = ['District_name']  
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    authentication_classes = [JWTAuthentication]
    


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer 
    filter_backends = [DjangoFilterBackend , OrderingFilter] 
    filterset_class = CityFilter
    ordering_fields = ['City_name', 'City_population', 'city_area']  
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess] 
    authentication_classes = [JWTAuthentication]
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)
class RegionEventViewSet(viewsets.ModelViewSet):
    queryset = RegionEvent.objects.all()
    serializer_class = RegionEventSerializer
    filter_backends = [DjangoFilterBackend , OrderingFilter]
    filterset_class = RegionEventFilter
    ordering_fields = ['region_name']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)

class ReligiousFestivalViewSet(viewsets.ModelViewSet):
    queryset = ReligiousFestival.objects.all()
    serializer_class = ReligiousFestivalSerializer
    filter_backends = [DjangoFilterBackend ,OrderingFilter]
    filterset_class = ReligiousFestivalFilter
    ordering_fields = ['name', 'date']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)

class CulturalFestivalViewSet(viewsets.ModelViewSet):
    queryset = CulturalFestival.objects.all()
    serializer_class = CulturalFestivalSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = CulturalFestivalFilter
    ordering_fields = ['name', 'season']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)



class FolkFestivalViewSet(viewsets.ModelViewSet):
    queryset = FolkFestival.objects.all()
    serializer_class = FolkFestivalSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = FolkFestivalFilter
    ordering_fields = ['name', 'region']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)



class RegionalEventViewSet(viewsets.ModelViewSet):
    queryset = RegionalEvent.objects.all()
    serializer_class = RegionalEventSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = RegionalEventFilter
    ordering_fields = ['name', ' region']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)
    

class NationalEventViewSet(viewsets.ModelViewSet):
    queryset = NationalEvent.objects.all()
    serializer_class = NationalEventSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = NationalEventFilter
    Ordering_fields = ['name', 'name']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)

class GlobalEventViewSet(viewsets.ModelViewSet):
    queryset = GlobalEvent.objects.all()
    serializer_class = GlobalEventSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = GlobalEventFilter
    ordering_fields = ['name', ' name']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)

    

    


class AdventureEventViewSet(viewsets.ModelViewSet):
    queryset = AdventureEvent.objects.all()
    serializer_class = AdventureEventSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = AdventureEventFilter
    ordering_fields = ['name', 'name']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)


class EmergencyContactViewSet(viewsets.ModelViewSet):
    queryset = EmergencyContact.objects.all()
    serializer_class = EmergencyContactSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = EmergencyContactFilter
    ordering_fields = ['government_contact_number']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)


class PoliceStationViewSet(viewsets.ModelViewSet):
    queryset = PoliceStation.objects.all()
    serializer_class = PoliceStationSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = PoliceStationFilter
    ordering_fields = ['government_contact_number']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)


class FireStationViewSet(viewsets.ModelViewSet):
    queryset = FireStation.objects.all()
    serializer_class = FireStationSerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = FireStationFilter
    ordering_fields = ['government_contact_number']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)


class MedicalEmergencyViewSet(viewsets.ModelViewSet):
    queryset = MedicalEmergency.objects.all()
    serializer_class = MedicalEmergencySerializer
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_class = MedicalEmergencyFilter
    ordering_fields = ['government_contact_number']
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnlyWithAdminFullAccess]
    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)



