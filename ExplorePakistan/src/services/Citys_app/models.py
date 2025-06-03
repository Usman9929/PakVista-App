from django.db import models


class province(models.Model):
    provinces_id = models.IntegerField(primary_key=True)
    provinces_name = models.CharField(max_length=100)
    provinces_code = models.CharField(max_length=100)
    provinces_capital_city = models.CharField(max_length=100)
    No_divisions_in_provinces = models.IntegerField()
    

    def __str__(self):
        return self.provinces_name

class Division(models.Model):
    Division_id = models.AutoField(primary_key=True)
    Division_name = models.CharField(max_length=100)
    Division_code = models.CharField(max_length=10)
    Province_id = models.ForeignKey(province,on_delete=models.CASCADE,related_name="Division")
    Division_capital_city = models.CharField(max_length=100)
    No_of_districts = models.IntegerField()

    def __str__(self):
        return self.Division_name

class District(models.Model):
    District_id = models.AutoField(primary_key=True)
    District_name = models.CharField(max_length=100)
    District_code = models.CharField(max_length=10)
    Division = models.ForeignKey(Division, on_delete=models.CASCADE, related_name='districts')
    District_capital_city = models.CharField(max_length=100)

    def __str__(self):
        return self.District_name

class City(models.Model):
    City_id = models.AutoField(primary_key=True)
    City_name = models.CharField(max_length=100)
    emergencyNumber = models.CharField(max_length=50)
    City_code = models.CharField(max_length=10)
    District = models.ForeignKey(District, on_delete=models.CASCADE, related_name='cities')
    City_population = models.IntegerField()
    city_area = models.CharField(max_length=100)
    Climate_detail = models.CharField(max_length=200)
    No_of_villages_in_city = models.IntegerField()
    City_description = models.TextField()
    Local_economy = models.CharField(max_length=200)
    submitted_by = models.ForeignKey(
    'Users_app.User',  # instead of direct import
    on_delete=models.SET_NULL,
    null=True,
    blank=True,
    related_name='submitted_cities'
)


    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.City_name
    

  
    

class RegionEvent(models.Model):
    region_id = models.AutoField(primary_key=True)
    region_name = models.CharField(max_length=255)
    description = models.TextField()
    city_id = models.ForeignKey(City, on_delete= models.CASCADE, related_name="region_evevnts")
    submitted_by = models.ForeignKey(
        'Users_app.User',   # use your custom user model
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="submitted_region_events"
    )

    is_approved = models.BooleanField(default=False)
    def __str__(self):
        return self.region_name
    

class ReligiousFestival(models.Model):
    festival_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    traditions = models.TextField()
    significance = models.TextField()
    date = models.DateField()
    associated_rituals = models.TextField()
    region_event = models.ForeignKey(RegionEvent, on_delete=models.CASCADE, related_name="religious_festivals")
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name='religious_festivals')
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class CulturalFestival(models.Model):
    festival_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()
    activities = models.TextField()
    season = models.CharField(max_length=255)
    significance = models.TextField()
    region_event = models.ForeignKey(RegionEvent, on_delete=models.CASCADE, related_name="cultural_festivals")
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name='cultural_festivals')  # user who submitted
    is_approved = models.BooleanField(default=False)  # approval logic
    def __str__(self):
        return self.name

class FolkFestival(models.Model):
    festival_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    region = models.CharField(max_length=255)
    description = models.TextField()
    activities = models.TextField()
    economic_impact = models.TextField()
    cultural_relevance = models.TextField()
    region_event  = models.ForeignKey(RegionEvent, on_delete=models.CASCADE, related_name="folk_festivals")
    submitted_by = models.ForeignKey('Users_app.User',on_delete=models.CASCADE,related_name="folk_festivals")
    is_approved = models.BooleanField(default=False)  # approval logic
    def __str__(self):
        return self.name

class RegionalEvent(models.Model):
    event_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    region = models.CharField(max_length=255)
    overview = models.TextField()
    activities = models.TextField()
    significance = models.TextField()
    region_event = models.ForeignKey(RegionEvent, on_delete=models.CASCADE, related_name="regional_events")
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="regional_events")
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class NationalEvent(models.Model):
    event_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    date = models.DateField()
    description = models.TextField()
    celebrations = models.TextField()
    historical_significance = models.TextField()
    region_event = models.ForeignKey(RegionEvent, on_delete=models.CASCADE, related_name="national_events")
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="national_events")
    is_approved = models.BooleanField(default=False)
    def __str__(self):
        return self.name


class GlobalEvent(models.Model):
    event_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    cultural_adaptations = models.TextField()
    activities = models.TextField()
    demographic_participation = models.TextField()
    region_event = models.ForeignKey(RegionEvent, on_delete=models.CASCADE, related_name="global_events")
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="global_events")
    is_approved = models.BooleanField(default=False)
    def __str__(self):
        return self.name

class AdventureEvent(models.Model):
    event_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    region = models.CharField(max_length=255)
    description = models.TextField()
    activities = models.TextField()
    tourism_impact = models.TextField()
    economic_contribution = models.TextField()
    region_event = models.ForeignKey(RegionEvent, on_delete=models.CASCADE, related_name="adventure_events")
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="adventure_events")
    is_approved = models.BooleanField(default=False)
    def __str__(self):
        return self.name

class EmergencyContact(models.Model):
    emergency_contact_id = models.AutoField(primary_key=True)
    city_id = models.ForeignKey(City,on_delete=models.CASCADE,related_name="emergency_contacts")
    government_contact_number = models.CharField(max_length=255)
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="emergency_contacts")
    is_approved = models.BooleanField(default=False)

class PoliceStation(models.Model):
    emergency_contact = models.ForeignKey(EmergencyContact, on_delete=models.CASCADE, related_name="police_stations")
    contact_number = models.CharField(max_length=255)
    address = models.CharField()
    operating_hours = models.TextField()
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="police_stations")
    is_approved = models.BooleanField(default=False)

class FireStation(models.Model):
    emergency_contact = models.ForeignKey(EmergencyContact, on_delete=models.CASCADE, related_name="fire_stations")
    contact_number = models.CharField(max_length=255)
    address = models.CharField()
    operating_hours = models.TextField()
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="fire_stations")
    is_approved = models.BooleanField(default=False)
        
class MedicalEmergency(models.Model):
    emergency_contact = models.ForeignKey(EmergencyContact, on_delete=models.CASCADE, related_name="medical_emergencies")
    ambulance_service = models.CharField(max_length=255)
    hospital_emergency_number = models.CharField(max_length=255)
    blood_bank = models.TextField()
    disaster_management = models.TextField()
    contact_for_floods_hazards = models.TextField() 
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="medical_emergencies")
    is_approved = models.BooleanField(default=False)   