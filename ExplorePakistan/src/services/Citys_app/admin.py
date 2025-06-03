from django.contrib import admin
from .models import province,Division, District, City,RegionEvent,ReligiousFestival,CulturalFestival,FolkFestival,RegionalEvent,NationalEvent,GlobalEvent,AdventureEvent,EmergencyContact,PoliceStation,FireStation,MedicalEmergency

admin.site.register(province)
admin.site.register(Division)
admin.site.register(District)
@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ('City_name', 'District', 'is_approved', 'submitted_by')
    list_filter = ('is_approved', 'District', 'submitted_by')
    search_fields = ('City_name', 'District__District_name', 'submitted_by__email')
    actions = ['approve_selected']

    def approve_selected(self, request, queryset):
        updated = queryset.update(is_approved=True)
        self.message_user(request, f"{updated} city(ies) approved.")
    approve_selected.short_description = "Approve selected cities"

@admin.register(RegionEvent)
class RegionEventAdmin(admin.ModelAdmin):
    list_display = ('region_name', 'city_id', 'is_approved', 'submitted_by')
    list_filter = ('is_approved', 'city_id')
    search_fields = ('region_name', 'description', 'submitted_by__username')

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            # Only set created_by during first save
            obj.created_by = request.user
        super().save_model(request, obj, form, change)
@admin.register(ReligiousFestival)
class ReligiousFestivalAdmin(admin.ModelAdmin):
    list_display = ('name', 'date', 'region_event', 'is_approved', 'submitted_by')
    list_filter = ('is_approved', 'date')
    search_fields = ('name', 'description', 'traditions', 'significance')
@admin.register(CulturalFestival)
class CulturalFestivalAdmin(admin.ModelAdmin):
    list_display = ('festival_id','name', 'location', 'season', 'region_event', 'is_approved', 'submitted_by')
    list_filter = ('is_approved', 'season')
    search_fields = ('name', 'location', 'description', 'activities', 'significance')

@admin.register(FolkFestival)
class FolkFestivalAdmin(admin.ModelAdmin):
    list_display = (
        'festival_id',
        'name',
        'region',
        'description',
        'activities',
        'economic_impact',
        'cultural_relevance',
        'region_event',
        'submitted_by',
        'is_approved',
    )
    list_filter = ('is_approved', 'region')
    search_fields = ('name', 'region', 'description', 'activities', 'cultural_relevance')


@admin.register(RegionalEvent)
class RegionalEventAdmin(admin.ModelAdmin):
    list_display = [field.name for field in RegionalEvent._meta.fields]
    search_fields = ['name', 'region']
    list_filter = ['is_approved', 'region']

@admin.register(NationalEvent)
class NationalEventAdmin(admin.ModelAdmin):
    list_display = [field.name for field in NationalEvent._meta.fields]
    search_fields = ['name', 'date']
    list_filter = ['is_approved']

@admin.register(GlobalEvent)
class GlobalEventAdmin(admin.ModelAdmin):
    list_display = [field.name for field in GlobalEvent._meta.fields]
    search_fields = ['name','cultural_adaptations']
    list_filter = ['is_approved']

@admin.register(AdventureEvent)
class AdventureEventAdmin(admin.ModelAdmin):
    list_display = [field.name for field in AdventureEvent._meta.fields]
    search_fields = ['name', 'region']
    list_filter = ['is_approved', 'region']

@admin.register(EmergencyContact)
class EmergencyContactAdmin(admin.ModelAdmin):
    list_display = [field.name for field in EmergencyContact._meta.fields]
    search_fields = ['government_contact_number']
    list_filter = ['is_approved']

@admin.register(PoliceStation)
class PoliceStationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in PoliceStation._meta.fields]
    search_fields = ['contact_number']
    list_filter = ['is_approved']

@admin.register(FireStation)
class FireStationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FireStation._meta.fields]
    search_fields = ['contact_number']
    list_filter = ['is_approved']

@admin.register(MedicalEmergency)
class MedicalEmergencyAdmin(admin.ModelAdmin):
    list_display = [field.name for field in MedicalEmergency._meta.fields]
    search_fields = ['ambulance_service', 'hospital_emergency_number']
    list_filter = ['is_approved']
# Register your models here.
