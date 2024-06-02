import {
    showLoadingSpinner,
    hideLoadingSpinner,
} from "../templates/template-creator";

const Question1 = {
    async render() {
        return `
        <h1>Question Page 1</h1>
      `;
    },

    async afterRender() {
        showLoadingSpinner();

        // Code Here
        const navbar = document.querySelector(".header-container");
        navbar.style.display = "none";

        hideLoadingSpinner();
    },
};

export default Question1;