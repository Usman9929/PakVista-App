const API_URL = "http://192.168.43.98:3000/village_profiles";

export const fetchVillages = async () => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error("Failed to fetch village data");
    }

    const data = await response.json();

    if (data) {
      return {
        general_villages: data.general_villages || [],
        topVillages: data.topVillages || [],
        touristVillages: data.touristVillages || [],
      };
    }

    return { general_villages: [], topVillages: [], touristVillages: [] };
  } catch (error) {
    console.error("Error fetching village data:", error);
    return { general_villages: [], topVillages: [], touristVillages: [] };
  }
};
