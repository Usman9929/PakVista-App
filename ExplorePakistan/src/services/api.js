const API_URL = "http://192.168.43.98:3000/village_profiles";

export const fetchVillages = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch village data");
    }

    const data = await response.json();

    console.log("Full API Response:", data); // ✅ Debugging

    if (data) {
      console.log("General Villages:", data.general_villages);
      console.log("Top Villages:", data.topVillages);
      console.log("Tourist Villages:", data.touristVillages);

      // Filter only villages belonging to Timergara city
      const timergaraVillages = (data.general_villages || []).filter(
        (village) => village.city === "Timergara"
      );

      return {
        general_villages: timergaraVillages, // Only Timergara villages
        topVillages: (data.topVillages || []).filter(
          (village) => village.city === "Timergara"
        ),
        touristVillages: (data.touristVillages || []).filter(
          (village) => village.city === "Timergara"
        ),
      };
    }

    return { general_villages: [], topVillages: [], touristVillages: [] };
  } catch (error) {
    console.error("Error fetching village data:", error);
    return { general_villages: [], topVillages: [], touristVillages: [] };
  }
};