from django.urls import path,include
from rest_framework.routers import DefaultRouter
from . import views
from .views import ProvinceViewSet,DivisionViewSet, DistrictViewSet, CityViewSet,RegionEventViewSet,ReligiousFestivalViewSet,CulturalFestivalViewSet,FolkFestivalViewSet,RegionalEventViewSet,NationalEventViewSet,GlobalEventViewSet,AdventureEventViewSet,EmergencyContactViewSet,PoliceStationViewSet,FireStationViewSet,MedicalEmergencyViewSet
router = DefaultRouter()

router.register(r'provinces', ProvinceViewSet)
router.register(r'divisions', DivisionViewSet)
router.register(r'districts', DistrictViewSet)
router.register(r'cities', CityViewSet)
router.register(r'region-events', RegionEventViewSet)
router.register(r'religious-festivals', ReligiousFestivalViewSet)
router.register(r'cultural-festivals', CulturalFestivalViewSet)
router.register(r'folk-festivals', FolkFestivalViewSet)
router.register(r'regional-events', RegionalEventViewSet)
router.register(r'national-events', NationalEventViewSet)
router.register(r'global-events', GlobalEventViewSet)
router.register(r'adventure-events', AdventureEventViewSet)
router.register(r'emergency-contacts', EmergencyContactViewSet)
router.register(r'police-stations', PoliceStationViewSet)
router.register(r'fire-stations', FireStationViewSet)
router.register(r'medical-emergencies', MedicalEmergencyViewSet)


urlpatterns = [
    path('', include(router.urls)),
   
                
]
  
