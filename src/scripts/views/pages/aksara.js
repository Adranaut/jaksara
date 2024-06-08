import JaksaraSource from "../../data/jaksara-source";
import {
    showLoadingSpinner,
    hideLoadingSpinner,
    CreateAksaraPageTemplate,
} from "../templates/template-creator";

const Aksara = {
    async render() {
        return `
        <list-aksara></list-aksara>
        <footer-content></footer-content>
     `;
    },

    async afterRender() {
        showLoadingSpinner();

        const navbar = document.querySelector("navbar-content");
        navbar.style.display = "none";

        const aksara = await JaksaraSource.aksara(); // Perhatikan await di sini untuk menunggu hasil dari promise JaksaraSource.aksara()
        const aksaraContainer = document.querySelector("#card-aksara");

        aksaraContainer.innerHTML = aksara.map(aksara => CreateAksaraPageTemplate(aksara)).join('');

        hideLoadingSpinner();
    },

};

export default Aksara;