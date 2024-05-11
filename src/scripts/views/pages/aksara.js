import JaksaraSourceSource from "../../data/jaksara-source";
import {
  showLoadingSpinner,
  hideLoadingSpinner,
} from "../templates/template-creator";

const Aksara = {
  async render() {
    return `
        <p>Aksara Page</p>
    `;
  },

  async afterRender() {
    showLoadingSpinner();

    // Code Here

    hideLoadingSpinner();
  },
};

export default Aksara;
