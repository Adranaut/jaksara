import API_ENDPOINT from "../globals/api-endpoint";

class JaksaraSource {
  static async aksara() {
    const response = await fetch(API_ENDPOINT.AKSARA);
    const responseJson = await response.json();
    return responseJson.aksara;
  }

  static async quiz() {
    const response = await fetch(API_ENDPOINT.QUIZ);
    const responseJson = await response.json();
    return responseJson.quizs;
  }
}

export default JaksaraSource;
