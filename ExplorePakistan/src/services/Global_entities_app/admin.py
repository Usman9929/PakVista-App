from django.contrib import admin
from .models import PopulationDetail,PopulationAdult,PopulationChildren,PopulationElderly,PopulationLiteracyRate,GenderRatio,GeographicalInformation,GeoArea,ClimateDetail,HistoricalBackground,LocationInformation,Economy,Farming,Handicrafts,Industries,CulturalInformation,LocalFestival,Traditions,LanguageSpoken
@admin.register(PopulationDetail)
class PopulationDetailAdmin(admin.ModelAdmin):
    list_display = [field.name for field in PopulationDetail._meta.fields]
    list_filter = ['is_approved']
    search_fields = ['population_code']

@admin.register(PopulationChildren)
class PopulationChildrenAdmin(admin.ModelAdmin):
    list_display = [field.name for field in PopulationChildren._meta.fields]
    list_filter = ['is_approved']
    search_fields =['age_range']


@admin.register(PopulationAdult)
class PopulationAdultAdmin(admin.ModelAdmin):
    list_display = [field.name for field in PopulationAdult._meta.fields]
    list_filter = ['is_approved']
    search_fields = ['age_range']

@admin.register(PopulationElderly)
class PopulationElderlyAdmin(admin.ModelAdmin):
    list_display = [field.name for field in PopulationElderly._meta.fields]
    list_filter = ['is_approved']
    search_fields = ['age_range']

@admin.register(PopulationLiteracyRate)
class PopulationLiteracyRateAdmin(admin.ModelAdmin):
    list_display = [field.name for field in PopulationLiteracyRate._meta.fields]
    list_filter = ['is_approved']
    search_fields = ['overall_literacy_rate']

@admin.register(GenderRatio)
class GenderRatioAdmin(admin.ModelAdmin):
    list_display = [field.name for field in GenderRatio._meta.fields]
    list_filter = ['is_approved']
    search_fields =['submitted_by']

@admin.register(GeographicalInformation)
class GeographicalInformationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in GeographicalInformation._meta.fields]
    list_filter = ['is_approved']
    search_fields = ['geographical_information_code']

@admin.register(LocationInformation)
class LocationInformationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in LocationInformation._meta.fields]
    list_filter = ['is_approved']
    search_fields = ['submitted_by']


@admin.register(GeoArea)
class GeoAreaAdmin (admin.ModelAdmin):
    list_display = [field.name for field in GeoArea._meta.fields]
    list_filter = ['is_approved']
    search_fields = ['submitted_by']

@admin.register(ClimateDetail)
class ClimateDetailAdmin(admin.ModelAdmin):
    list_display = [field.name for field in ClimateDetail._meta.fields]
    list_filter = ['is_approved']
    search_fields = ['submitted_by']

@admin.register(HistoricalBackground)
class HistoricalBackgroundAdmin(admin.ModelAdmin):
    list_display = [field.name for field in HistoricalBackground._meta.fields]
    list_filter = ['is_approved']
    search_fields = ['submitted_by']

@admin.register(Economy)
class EconomyAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Economy._meta.fields]
    list_filter = ['is_approved']
    search_fields = ['submitted_by']

@admin.register(Farming)
class FarmingAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Farming._meta.fields]
    list_filter = ['is_approved']
    search_fields = ['submitted_by']
@admin.register(Handicrafts) 
class HandicraftsAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Handicrafts._meta.fields]
    list_filter = ['is_approved']
    search_fields = ['submitted_by']


@admin.register(Industries)
class IndustriesAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Industries._meta.fields]
    list_filter = ['is_approved']
    search_fields = ['submitted_by']

@admin.register(CulturalInformation)
class CulturalInformationAdmin(admin.ModelAdmin):
     list_display = [field.name for field in CulturalInformation._meta.fields]
     list_filter = ['is_approved']
     search_fields = ['submitted_by']

@admin.register(LocalFestival)
class LocalFestivalAdmin(admin.ModelAdmin):
     list_display = [field.name for field in LocalFestival._meta.fields]
     list_filter = ['is_approved']
     search_fields = ['submitted_by']

@admin.register(Traditions)
class TraditionsAdmin(admin.ModelAdmin):
     list_display = [field.name for field in Traditions._meta.fields]
     list_filter = ['is_approved']
     search_fields = ['submitted_by']

@admin.register(LanguageSpoken)
class LanguageSpokenAdmin(admin.ModelAdmin):
      list_display = [field.name for field in LanguageSpoken._meta.fields]
      list_filter = ['is_approved']
      search_fields = ['submitted_by']







