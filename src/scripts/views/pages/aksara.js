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
     `;
    },

    async afterRender() {
        showLoadingSpinner();

        const navbar = document.querySelector("navbar-content");
        navbar.style.display = "none";

        const aksara = await JaksaraSource.aksara(); // Perhatikan await di sini untuk menunggu hasil dari promise JaksaraSource.aksara()
        const aksaraContainer = document.querySelector("#card-aksara");

        aksaraContainer.innerHTML = aksara.map(aksara => CreateAksaraPageTemplate(aksara)).join('');

        // Fungsi untuk mengatur waktu
        function updateTime() {
            const timeElement = document.getElementById('time');
            const now = new Date();
            const hours = now.getHours();

            let greeting;
            if (hours < 12) {
                greeting = 'Selamat Pagi 👋🏻';
            } else if (hours < 18) {
                setInterval(updateTime, 60000);
                greeting = 'Selamat Sore 👋🏻';
            } else {
                greeting = 'Selamat Malam 👋🏻';
            }

            timeElement.textContent = greeting;
        }

        // Panggil fungsi untuk mengatur greeting saat halaman dimuat
        updateTime();

        // Update greeting setiap menit (60000 milidetik)
        setInterval(updateTime, 60000);

        hideLoadingSpinner();
    },

};

export default Aksara;