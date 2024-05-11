import JaksaraSourceSource from "../../data/jaksara-source";
import {
  showLoadingSpinner,
  hideLoadingSpinner,
} from "../templates/template-creator";

const Quiz = {
  async render() {
    return `
        <p>Quiz Page</p>
    `;
  },

  async afterRender() {
    showLoadingSpinner();

    // Code Here

    hideLoadingSpinner();
  },
};

export default Quiz;
