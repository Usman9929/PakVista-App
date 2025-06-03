from django.db import models
from Citys_app.models import province,District,Division,City
from Village_app.models import Village

class PopulationDetail(models.Model):
    population_code = models.CharField(max_length=50, unique=True)
    provinces_id = models.ForeignKey(province, on_delete=models.CASCADE, null=True, blank=True)
    Division_id = models.ForeignKey(Division, on_delete=models.CASCADE, null=True, blank=True)
    District_id= models.ForeignKey(District, on_delete=models.CASCADE, null=True, blank=True)
    City_id= models.ForeignKey(City, on_delete=models.CASCADE, null=True, blank=True)
    village_id  = models.ForeignKey(Village, on_delete=models.CASCADE, null=True, blank=True)
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="population_details")
    is_approved = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Population {self.population_code}"
class PopulationChildren(models.Model):
    population_code = models.ForeignKey(PopulationDetail, on_delete=models.CASCADE, related_name="children_population")
    total = models.IntegerField()
    age_range = models.CharField(max_length=50)
    percentage_of_total_population = models.FloatField()
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Population_Children")
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return f"Children Population - {self.population.population_code}"   

class PopulationAdult(models.Model):
    population_code = models.ForeignKey(PopulationDetail, on_delete=models.CASCADE, related_name="adult_population")
    total = models.IntegerField()
    age_range = models.CharField(max_length=50)
    percentage_of_total_population = models.FloatField()
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Population_Adult")
    is_approved = models.BooleanField(default=False)
    

    def __str__(self):
        return f"Adult Population - {self.population.population_code}"  

class PopulationElderly(models.Model):
    population_code = models.ForeignKey(PopulationDetail, on_delete=models.CASCADE, related_name="elderly_population")
    total = models.IntegerField()
    age_range = models.CharField(max_length=50)
    percentage_of_total_population = models.FloatField()
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Population_Elderly")
    is_approved = models.BooleanField(default=False)
    

    def __str__(self):
        return f"Elderly Population - {self.population.population_code}"  

class GenderRatio(models.Model):
    population_code = models.ForeignKey(PopulationDetail, on_delete=models.CASCADE, related_name="gender_ratio")
    male = models.IntegerField()
    female = models.IntegerField()
    male_to_female_ratio = models.FloatField()
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Gender_Ratio")
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return f"Gender Ratio - {self.population.population_code}"

class PopulationLiteracyRate(models.Model):
    population_code = models.ForeignKey(PopulationDetail, on_delete=models.CASCADE, related_name="literacy_rate")
    overall_literacy_rate = models.FloatField()
    male_literacy_rate = models.FloatField()
    female_literacy_rate = models.FloatField()
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="literacy_rate")
    is_approved = models.BooleanField(default=False)


    def __str__(self):
        return f"Literacy Rate - {self.population.population_code}"                             

class GeographicalInformation(models.Model):
    geographical_information_code = models.CharField(max_length=50, unique=True)
    provinces_id = models.ForeignKey(province, on_delete=models.CASCADE, null=True, blank=True)
    Division_id = models.ForeignKey(Division, on_delete=models.CASCADE, null=True, blank=True)
    District_id= models.ForeignKey(District, on_delete=models.CASCADE, null=True, blank=True)
    City_id= models.ForeignKey(City, on_delete=models.CASCADE, null=True, blank=True)
    village_id  = models.ForeignKey(Village, on_delete=models.CASCADE, null=True, blank=True)
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Geographical_Information")
    is_approved = models.BooleanField(default=False)


    def __str__(self):
        return self.geographical_information_code

class LocationInformation(models.Model):
    geographical_information_code  = models.ForeignKey(GeographicalInformation, on_delete=models.CASCADE,related_name="location_information")
    coordinates = models.CharField(max_length=255)
    nearest_landmark = models.CharField(max_length=255)
    distance_from_major_city = models.FloatField()
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="location_information")
    is_approved = models.BooleanField(default=False)


    def __str__(self):
        return self.geographical_information_code

class GeoArea(models.Model):
    geographical_information_code = models.ForeignKey(GeographicalInformation, on_delete=models.CASCADE,related_name="geo_area")
    total_area = models.FloatField()
    topography = models.TextField()
    land_use = models.TextField()
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="geo_area")
    is_approved = models.BooleanField(default=False)


    def __str__(self):
        return self.geographical_information_code
class ClimateDetail(models.Model):
    geographical_information_code = models.ForeignKey(GeographicalInformation, on_delete=models.CASCADE,related_name="climate_detail")
    average_temperature = models.FloatField()
    rainfall = models.FloatField()
    seasonal_variations = models.TextField()
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Climate_Detail")
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.geographical_information_code

class HistoricalBackground(models.Model):
    provinces_id = models.ForeignKey(province, on_delete=models.CASCADE, null=True, blank=True)
    Division_id = models.ForeignKey(Division, on_delete=models.CASCADE, null=True, blank=True)
    District_id= models.ForeignKey(District, on_delete=models.CASCADE, null=True, blank=True)
    City_id= models.ForeignKey(City, on_delete=models.CASCADE, null=True, blank=True)
    village_id = models.ForeignKey(Village, on_delete=models.CASCADE, null=True, blank=True)
    founding_year = models.IntegerField()
    founders = models.TextField()
    historical_events = models.TextField()
    cultural_significance = models.TextField()
    monuments_or_landmarks = models.TextField()
    ethnic_background = models.TextField()
    famous_persons = models.TextField()
    historic_sites_nearby = models.TextField()
    development_over_time = models.TextField()
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Historical_Background")
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return f"Historical Background of Village {self.village_id}, City {self.city_id}" 
class Economy(models.Model):
    economy_id = models.AutoField(primary_key=True)
    provinces_id = models.ForeignKey(province, on_delete=models.CASCADE, null=True, blank=True)
    Division_id = models.ForeignKey(Division, on_delete=models.CASCADE, null=True, blank=True)
    District_id= models.ForeignKey(District, on_delete=models.CASCADE, null=True, blank=True)
    City_id= models.ForeignKey(City, on_delete=models.CASCADE, null=True, blank=True)
    village_id = models.ForeignKey(Village, on_delete=models.CASCADE, null=True, blank=True)
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Economy")
    is_approved = models.BooleanField(default=False)
    def __str__(self):
        return f"Economy {self.economy_id}"       
class Farming(models.Model):
    economy_id = models.ForeignKey(Economy, on_delete=models.CASCADE,related_name="Farming")
    major_crops = models.TextField()
    fruit_cultivation = models.TextField()
    live_stock = models.TextField()
    methods_used = models.TextField() 
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Farming")
    is_approved = models.BooleanField(default=False)   
    def __str__(self):
        return self.major_crops
class Handicrafts(models.Model):
    economy_id = models.ForeignKey(Economy, on_delete=models.CASCADE,related_name="Handicrafts")
    popular_crafts = models.TextField()
    specialty_items = models.TextField()
    community_involvement = models.TextField()
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Handicrafts")
    is_approved = models.BooleanField(default=False)       
    def __str__(self):
        return self.popular_crafts
class Industries(models.Model):
    economy_id = models.ForeignKey(Economy, on_delete=models.CASCADE,related_name="Industries")
    local_factories = models.TextField()
    raw_material_sources = models.TextField()
    employment_contribution = models.TextField()
    economic_impact = models.TextField()
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Industries")
    is_approved = models.BooleanField(default=False)  
    def __str__(self):
        return self.local_factories
    
class CulturalInformation(models.Model):
    cultural_information_id = models.AutoField(primary_key=True)
    provinces_id = models.ForeignKey(province, on_delete=models.CASCADE, null=True, blank=True)
    Division_id = models.ForeignKey(Division, on_delete=models.CASCADE, null=True, blank=True)
    District_id= models.ForeignKey(District, on_delete=models.CASCADE, null=True, blank=True)
    City_id= models.ForeignKey(City, on_delete=models.CASCADE, null=True, blank=True)
    village_id = models.ForeignKey(Village, on_delete=models.CASCADE, null=True, blank=True)
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Cultural_Information")
    is_approved = models.BooleanField(default=False)  
    def __str__(self):
        return f"Cultural Info {self.cultural_information_id}"    

class LocalFestival(models.Model):
    cultural_information_id = models.ForeignKey(CulturalInformation, on_delete=models.CASCADE, related_name='local_festival')
    spring_festival = models.CharField(max_length=255, blank=True, null=True)
    harvest_festival = models.CharField(max_length=255, blank=True, null=True)
    eid_celebrations = models.CharField(max_length=255, blank=True, null=True)
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Local_Festival")
    is_approved = models.BooleanField(default=False)    
    def __str__(self):
        return f"Local Festival {self.cultural_information_id}"  

class Traditions(models.Model):
    cultural_information_id = models.ForeignKey(CulturalInformation, on_delete=models.CASCADE, related_name='traditions')
    traditional_dress = models.CharField(max_length=255, blank=True, null=True)
    hospitality = models.TextField(blank=True, null=True)
    storytelling_evenings = models.TextField(blank=True, null=True)
    wedding_ceremonies = models.TextField(blank=True, null=True)
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Traditions")
    is_approved = models.BooleanField(default=False)   
    
    def __str__(self):
        return f"Traditions {self.cultural_information_id}"    
class LanguageSpoken(models.Model):
    cultural_information_id = models.ForeignKey(CulturalInformation, on_delete=models.CASCADE, related_name='languages_spoken')
    primary_language = models.CharField(max_length=100)
    secondary_language = models.CharField(max_length=100, blank=True, null=True)
    additional_languages = models.TextField(blank=True, null=True)
    submitted_by = models.ForeignKey('Users_app.User', on_delete=models.CASCADE, related_name="Language_Spokenraditions")
    is_approved = models.BooleanField(default=False)  
    
    def __str__(self):
        return f"Languages {self.cultural_information_id}"
    