import {
    showLoadingSpinner,
    hideLoadingSpinner,
} from "../templates/template-creator"

const Select = {
    async render() {
        return `
        <select-content></select-content>
      `;
    },

    async afterRender() {
        showLoadingSpinner();

        const navbar = document.querySelector("navbar-content");
        navbar.style.display = "none";

        hideLoadingSpinner();
    },
};

export default Select;