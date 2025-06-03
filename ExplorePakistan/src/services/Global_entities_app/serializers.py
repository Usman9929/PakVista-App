from rest_framework import serializers
from .models import PopulationDetail,PopulationChildren,PopulationAdult,PopulationLiteracyRate,GenderRatio,PopulationElderly,GeographicalInformation,LocationInformation,GeoArea,ClimateDetail,HistoricalBackground,Economy,Farming,Handicrafts,Industries,CulturalInformation,LocalFestival,LanguageSpoken,Traditions

class PopulationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopulationDetail
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']
       
class PopulationChildrenSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopulationChildren
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']
        
class PopulationAdultSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopulationAdult
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']


class PopulationElderlySerializer(serializers.ModelSerializer):
    class Meta:
        model = PopulationElderly
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']


class GenderRatioSerializer(serializers.ModelSerializer):
    class Meta:
        model = GenderRatio
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class PopulationLiteracyRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopulationLiteracyRate
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class GeographicalInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeographicalInformation
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class LocationInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocationInformation
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class GeoAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeoArea
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class ClimateDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClimateDetail
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class HistoricalBackgroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = HistoricalBackground
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class EconomySerializer(serializers.ModelSerializer):
    class Meta:
        model = Economy
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class FarmingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farming
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class HandicraftsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Handicrafts
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class IndustriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Industries
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']
class CulturalInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CulturalInformation
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class LocalFestivalSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocalFestival
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class TraditionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Traditions
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']

class LanguageSpokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguageSpoken
        fields = '__all__'
        read_only_fields = ['submitted_by', 'is_approved']
