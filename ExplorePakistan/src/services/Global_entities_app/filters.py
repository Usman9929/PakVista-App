import django_filters
from .models import PopulationDetail,PopulationChildren,PopulationAdult,PopulationElderly,GenderRatio,PopulationLiteracyRate,GeoArea,GeographicalInformation,ClimateDetail,HistoricalBackground,Economy,Farming,Handicrafts,Industries,CulturalInformation,LanguageSpoken,LocalFestival,Traditions
from Citys_app.models import province,District,Division,City
from Village_app.models import Village


class PopulationDetailFilter(django_filters.FilterSet):
    population_code = django_filters.CharFilter(lookup_expr='icontains')
    provinces_id = django_filters.NumberFilter()
    Division_id = django_filters.NumberFilter()
    District_id = django_filters.NumberFilter()
    City_id = django_filters.NumberFilter()
    village_id = django_filters.NumberFilter()

    class Meta:
        model = PopulationDetail
        fields = ['population_code', 'provinces_id', 'Division_id', 'District_id', 'City_id', 'village_id']

class PopulationChildrenFilter(django_filters.FilterSet):
    population_code = django_filters.NumberFilter(field_name="population_code__id")
    age_range = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = PopulationChildren
        fields = ['population_code', 'age_range']

class PopulationAdultFilter(django_filters.FilterSet):
    population_code = django_filters.NumberFilter(field_name="population_code__id")
    age_range = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = PopulationAdult
        fields = ['population_code', 'age_range']

class PopulationElderlyFilter(django_filters.FilterSet):
    population_code = django_filters.NumberFilter(field_name="population_code__id")
    age_range = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = PopulationElderly
        fields = ['population_code', 'age_range']

class GenderRatioFilter(django_filters.FilterSet):
    population_code = django_filters.NumberFilter(field_name="population_code__id")

    class Meta:
        model = GenderRatio
        fields = ['population_code', 'male', 'female']

class PopulationLiteracyRateFilter(django_filters.FilterSet):
    population_code = django_filters.NumberFilter(field_name="population_code__id")

    class Meta:
        model = PopulationLiteracyRate
        fields = ['population_code', 'overall_literacy_rate', 'male_literacy_rate', 'female_literacy_rate']

class GeographicalInformationFilter(django_filters.FilterSet):
    geographical_information_code = django_filters.CharFilter(lookup_expr='icontains')
    provinces_id = django_filters.NumberFilter()
    Division_id = django_filters.NumberFilter()
    District_id = django_filters.NumberFilter()
    City_id = django_filters.NumberFilter()
    village_id = django_filters.NumberFilter()

    class Meta:
        model = GeographicalInformation
        fields = ['geographical_information_code', 'provinces_id', 'Division_id', 'District_id', 'City_id', 'village_id']

class EconomyFilter(django_filters.FilterSet):
    provinces_id = django_filters.NumberFilter()
    Division_id = django_filters.NumberFilter()
    District_id = django_filters.NumberFilter()
    City_id = django_filters.NumberFilter()
    village_id = django_filters.NumberFilter()

    class Meta:
        model = Economy
        fields = ['provinces_id', 'Division_id', 'District_id', 'City_id', 'village_id']

class FarmingFilter(django_filters.FilterSet):
    economy_id = django_filters.NumberFilter(field_name="economy_id__id")

    class Meta:
        model = Farming
        fields = ['economy_id', 'major_crops']

class IndustriesFilter(django_filters.FilterSet):
    economy_id = django_filters.NumberFilter(field_name="economy_id__id")

    class Meta:
        model = Industries
        fields = ['economy_id', 'local_factories']

class HandicraftsFilter(django_filters.FilterSet):
    economy_id = django_filters.NumberFilter(field_name="economy_id__id")

    class Meta:
        model = Handicrafts
        fields = ['economy_id', 'popular_crafts']

class CulturalInformationFilter(django_filters.FilterSet):
    provinces_id = django_filters.NumberFilter()
    Division_id = django_filters.NumberFilter()
    District_id = django_filters.NumberFilter()
    City_id = django_filters.NumberFilter()
    village_id = django_filters.NumberFilter()

    class Meta:
        model = CulturalInformation
        fields = ['provinces_id', 'Division_id', 'District_id', 'City_id', 'village_id']

class LocalFestivalFilter(django_filters.FilterSet):
    cultural_information_id = django_filters.NumberFilter(field_name="cultural_information_id__id")

    class Meta:
        model = LocalFestival
        fields = ['cultural_information_id', 'spring_festival', 'harvest_festival', 'eid_celebrations']

class TraditionsFilter(django_filters.FilterSet):
    cultural_information_id = django_filters.NumberFilter(field_name="cultural_information_id__id")

    class Meta:
        model = Traditions
        fields = ['cultural_information_id', 'traditional_dress']

class LanguageSpokenFilter(django_filters.FilterSet):
    cultural_information_id = django_filters.NumberFilter(field_name="cultural_information_id__id")

    class Meta:
        model = LanguageSpoken
        fields = ['cultural_information_id', 'primary_language', 'secondary_language']

import django_filters
from .models import LocationInformation, GeoArea, ClimateDetail, HistoricalBackground

class LocationInformationFilter(django_filters.FilterSet):
    geographical_information_code = django_filters.CharFilter(field_name='geographical_information_code__geographical_information_code', lookup_expr='icontains')
    nearest_landmark = django_filters.CharFilter(lookup_expr='icontains')
    distance_from_major_city = django_filters.RangeFilter()  # Allows filtering by min/max range

    class Meta:
        model = LocationInformation
        fields = ['geographical_information_code', 'nearest_landmark', 'distance_from_major_city']

class GeoAreaFilter(django_filters.FilterSet):
    geographical_information_code = django_filters.CharFilter(field_name='geographical_information_code__geographical_information_code', lookup_expr='icontains')
    total_area = django_filters.RangeFilter()  # Allows filtering by min/max area

    class Meta:
        model = GeoArea
        fields = ['geographical_information_code', 'total_area', 'topography', 'land_use']

class ClimateDetailFilter(django_filters.FilterSet):
    geographical_information_code = django_filters.CharFilter(field_name='geographical_information_code__geographical_information_code', lookup_expr='icontains')
    average_temperature = django_filters.RangeFilter()
    rainfall = django_filters.RangeFilter()

    class Meta:
        model = ClimateDetail
        fields = ['geographical_information_code', 'average_temperature', 'rainfall', 'seasonal_variations']

class HistoricalBackgroundFilter(django_filters.FilterSet):
    founding_year = django_filters.RangeFilter()  # Allows filtering by min/max founding year
    province_id = django_filters.NumberFilter(field_name='provinces_id')
    division_id = django_filters.NumberFilter(field_name='Division_id')
    district_id = django_filters.NumberFilter(field_name='District_id')
    city_id = django_filters.NumberFilter(field_name='City_id')
    village_id = django_filters.NumberFilter(field_name='village_id')

    class Meta:
        model = HistoricalBackground
        fields = ['founding_year', 'province_id', 'division_id', 'district_id', 'city_id', 'village_id']
