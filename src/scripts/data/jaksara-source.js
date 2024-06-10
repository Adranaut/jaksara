import API_ENDPOINT from "../globals/api-endpoint";
class JaksaraSource {
  static async aksara() {
    try {
      const response = await fetch(API_ENDPOINT.AKSARA);

      // Log status dan headers dari respons
      console.log("API Response Status:", response.status);
      console.log("API Response Headers:", response.headers);

      // Cek jika responsnya ok
      if (!response.ok) {
        console.error("API response not ok");
        return null;
      }

      const responseJson = await response.json();

      // Log respons JSON lengkap
      console.log("API Response JSON:", responseJson);

      // Mengakses data.aksara dari respons JSON
      if (
        responseJson.status === "success" &&
        responseJson.data &&
        Array.isArray(responseJson.data.aksara)
      ) {
        return responseJson.data.aksara;
      } else {
        console.error("API response does not contain aksara array.");
        return null;
      }
    } catch (error) {
      console.error("Failed to fetch data from API:", error);
      return null;
    }
  }

  static async quiz() {
    const response = await fetch(API_ENDPOINT.QUIZ);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default JaksaraSource;
