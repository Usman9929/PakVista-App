from rest_framework import serializers
from ..models import province,Division, District, City,RegionEvent,ReligiousFestival,CulturalFestival,FolkFestival,RegionalEvent,NationalEvent,GlobalEvent,AdventureEvent,EmergencyContact,PoliceStation,FireStation,MedicalEmergency
class provinceSerlizers(serializers.ModelSerializer):
    class Meta:
        model =  province
        fields = '__all__'

class DivisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Division
        fields = '__all__'

class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model = District
        fields = '__all__'

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__' 
        read_only_fields = ('submitted_by', 'is_approved')        

class RegionEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegionEvent
        fields = '__all__'
        read_only_fields = ['is_approved', 'submitted_by']  # these will be set automatically  # These fields will not be sent by user, will be set automatically
class ReligiousFestivalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReligiousFestival
        fields = '__all__'
        read_only_fields = ['is_approved', 'submitted_by']  # prevent users from manually setting it
class CulturalFestivalSerializer(serializers.ModelSerializer):
    class Meta:
        model = CulturalFestival
        fields = '__all__'
        read_only_fields = ['is_approved', 'submitted_by']  # prevent users from manually setting it

class FolkFestivalSerializer(serializers.ModelSerializer):
    class Meta:
        model = FolkFestival
        fields = '__all__'
        read_only_fields = ['is_approved', 'submitted_by']  # prevent users from manually setting it

class RegionalEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegionalEvent
        fields = '__all__'
        read_only_fields = ['is_approved', 'submitted_by']  # prevent users from manually setting it

class NationalEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = NationalEvent
        fields = '__all__'
        read_only_fields = ['is_approved', 'submitted_by']  # prevent users from manually setting it

class GlobalEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = GlobalEvent
        fields = '__all__'
        read_only_fields = ['is_approved', 'submitted_by']  # prevent users from manually setting it
class AdventureEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdventureEvent
        fields = '__all__'
        read_only_fields = ['is_approved', 'submitted_by']  # prevent users from manually setting it

class EmergencyContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmergencyContact
        fields = '__all__'
        read_only_fields = ['is_approved', 'submitted_by']  # prevent users from manually setting it

class PoliceStationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PoliceStation
        fields = '__all__'
        read_only_fields = ['is_approved', 'submitted_by']  # prevent users from manually setting it

class FireStationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FireStation
        fields = '__all__'
        read_only_fields = ['is_approved', 'submitted_by']  # prevent users from manually setting it

class MedicalEmergencySerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalEmergency
        fields = '__all__'
        read_only_fields = ['is_approved', 'submitted_by']  # prevent users from manually setting it