import django_filters
from .models import province,Division,District,City,RegionEvent,ReligiousFestival,CulturalFestival,FolkFestival,RegionalEvent,NationalEvent,GlobalEvent,AdventureEvent,EmergencyContact,PoliceStation,FireStation,MedicalEmergency

class ProvinceFilter(django_filters.FilterSet):
    provinces_name = django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive name search
    provinces_code = django_filters.CharFilter(lookup_expr='exact')  # Exact match for province code
    provinces_capital_city = django_filters.CharFilter(lookup_expr='icontains')  # Search by capital city
    No_divisions_in_provinces = django_filters.NumberFilter()  # Filter by exact division count

    class Meta:
        model = province
        fields = ['provinces_name', 'provinces_code', 'provinces_capital_city', 'No_divisions_in_provinces']

class DivisionFilter(django_filters.FilterSet):
    Division_name = django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive search for name
    Division_code = django_filters.CharFilter(lookup_expr='exact')  # Exact match for division code
    Division_capital_city = django_filters.CharFilter(lookup_expr='icontains')  # Search by capital city
    No_of_districts = django_filters.NumberFilter()  # Filter by exact district count
    Province_id = django_filters.NumberFilter(field_name="Province_id__provinces_id", lookup_expr="exact")  # Filter by province ID

    class Meta:
        model = Division
        fields = ['Division_name', 'Division_code', 'Division_capital_city', 'No_of_districts', 'Province_id']

class DistrictFilter(django_filters.FilterSet):
    District_name = django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive search
    District_code = django_filters.CharFilter(lookup_expr='exact')  # Exact match
    District_capital_city = django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive search
    Division = django_filters.NumberFilter(field_name="Division__Division_id", lookup_expr="exact")  # Filter by Division ID

    class Meta:
        model = District
        fields = ['District_name', 'District_code', 'District_capital_city', 'Division']

class CityFilter(django_filters.FilterSet):
    # Filtering on City fields
    City_name = django_filters.CharFilter(lookup_expr='icontains')  # Case-insensitive search
    City_code = django_filters.CharFilter(lookup_expr='exact')
    City_population_min = django_filters.NumberFilter(field_name='City_population', lookup_expr='gte')  # Min population
    City_population_max = django_filters.NumberFilter(field_name='City_population', lookup_expr='lte')  # Max population
    City_area_min = django_filters.NumberFilter(field_name='city_area', lookup_expr='gte')  # Min area
    City_area_max = django_filters.NumberFilter(field_name='city_area', lookup_expr='lte')  # Max area
    Climate_detail = django_filters.CharFilter(lookup_expr='icontains')
    No_of_villages_in_city = django_filters.NumberFilter(lookup_expr='exact')

    # Filtering on related District fields
    District_name = django_filters.CharFilter(field_name='District__District_name', lookup_expr='icontains')
    District_code = django_filters.CharFilter(field_name='District__District_code', lookup_expr='exact')

    class Meta:
        model = City
        fields = [
            'City_name', 'City_code', 'Climate_detail', 'No_of_villages_in_city', 
            'District_name', 'District_code'
        ]



# Filter for RegionEvent
class RegionEventFilter(django_filters.FilterSet):
    region_name = django_filters.CharFilter(lookup_expr='icontains')
    city_id = django_filters.NumberFilter(field_name='city_id')

    class Meta:
        model = RegionEvent
        fields = ['region_name', 'city_id']


# Filter for ReligiousFestival
class ReligiousFestivalFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    date = django_filters.DateFilter()
    region_event = django_filters.NumberFilter(field_name='region_event_id')

    class Meta:
        model = ReligiousFestival
        fields = ['name', 'date', 'region_event']


# Filter for CulturalFestival
class CulturalFestivalFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    season = django_filters.CharFilter(lookup_expr='icontains')
    location = django_filters.CharFilter(lookup_expr='icontains')
    region_event = django_filters.NumberFilter(field_name='region_event_id')

    class Meta:
        model = CulturalFestival
        fields = ['name', 'season', 'location', 'region_event']


# Filter for FolkFestival
class FolkFestivalFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    region = django_filters.CharFilter(lookup_expr='icontains')
    region_event = django_filters.NumberFilter(field_name='region_event_id')

    class Meta:
        model = FolkFestival
        fields = ['name', 'region', 'region_event']


# Filter for RegionalEvent
class RegionalEventFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    region = django_filters.CharFilter(lookup_expr='icontains')
    region_event = django_filters.NumberFilter(field_name='region_event_id')

    class Meta:
        model = RegionalEvent
        fields = ['name', 'region', 'region_event']


# Filter for NationalEvent
class NationalEventFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    date = django_filters.DateFilter()
    region_event = django_filters.NumberFilter(field_name='region_event_id')

    class Meta:
        model = NationalEvent
        fields = ['name', 'date', 'region_event']


# Filter for GlobalEvent
class GlobalEventFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    region_event = django_filters.NumberFilter(field_name='region_event_id')

    class Meta:
        model = GlobalEvent
        fields = ['name', 'region_event']


# Filter for AdventureEvent
class AdventureEventFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    region = django_filters.CharFilter(lookup_expr='icontains')
    region_event = django_filters.NumberFilter(field_name='region_event_id')

    class Meta:
        model = AdventureEvent
        fields = ['name', 'region', 'region_event']


# Filter for EmergencyContact
class EmergencyContactFilter(django_filters.FilterSet):
    city_id = django_filters.NumberFilter(field_name='city_id')
    government_contact_number = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = EmergencyContact
        fields = ['city_id', 'government_contact_number']


# Filter for PoliceStation
class PoliceStationFilter(django_filters.FilterSet):
    emergency_contact = django_filters.NumberFilter(field_name='emergency_contact_id')
    contact_number = django_filters.CharFilter(lookup_expr='icontains')
    address = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = PoliceStation
        fields = ['emergency_contact', 'contact_number', 'address']


# Filter for FireStation
class FireStationFilter(django_filters.FilterSet):
    emergency_contact = django_filters.NumberFilter(field_name='emergency_contact_id')
    contact_number = django_filters.CharFilter(lookup_expr='icontains')
    address = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = FireStation
        fields = ['emergency_contact', 'contact_number', 'address']


# Filter for MedicalEmergency
class MedicalEmergencyFilter(django_filters.FilterSet):
    emergency_contact = django_filters.NumberFilter(field_name='emergency_contact_id')
    ambulance_service = django_filters.CharFilter(lookup_expr='icontains')
    hospital_emergency_number = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = MedicalEmergency
        fields = ['emergency_contact', 'ambulance_service', 'hospital_emergency_number']
