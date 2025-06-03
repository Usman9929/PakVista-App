from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import PopulationDetailViewSet,PopulationChildrenViewSet,PopulationAdultViewSet,PopulationElderlyViewSet,PopulationLiteracyRateViewSet,GenderRatioViewSet,GeographicalInformationViewSet,LocationInformationViewSet,GeoAreaViewSet,ClimateDetailViewSet,HistoricalBackgroundViewSet,EconomyViewSet,FarmingViewSet,HandicraftsViewSet,IndustriesViewSet,CulturalInformationViewSet,LocalFestivalViewSet,LanguageSpokenViewSet,TraditionsViewSet

router = DefaultRouter()
router.register(r'population-details', PopulationDetailViewSet)
router.register(r'population-children', PopulationChildrenViewSet)
router.register(r'population-adult', PopulationAdultViewSet)
router.register(r'population-elderly', PopulationElderlyViewSet)
router.register(r'gender-ratio', GenderRatioViewSet)
router.register(r'population-literacy', PopulationLiteracyRateViewSet)
router.register(r'geographical-information', GeographicalInformationViewSet)
router.register(r'location-information', LocationInformationViewSet)
router.register(r'geo-area', GeoAreaViewSet)
router.register(r'climate-detail', ClimateDetailViewSet)
router.register(r'historical-background', HistoricalBackgroundViewSet)
router.register(r'economy', EconomyViewSet)
router.register(r'farming', FarmingViewSet)
router.register(r'handicrafts', HandicraftsViewSet)
router.register(r'industries', IndustriesViewSet)
router.register(r'cultural_information', CulturalInformationViewSet)
router.register(r'local_festival', LocalFestivalViewSet)
router.register(r'traditions', TraditionsViewSet)
router.register(r'language_spoken', LanguageSpokenViewSet)

urlpatterns = [
    path('', include(router.urls)),
]