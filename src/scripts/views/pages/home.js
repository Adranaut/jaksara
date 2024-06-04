import {
    showLoadingSpinner,
    hideLoadingSpinner,
} from "../templates/template-creator";

const Home = {
    async render() {
        return `
            <hero-content></hero-content>
            <about-content></about-content>
            <fitur-content></fitur-content>
            <testimonial-content></testimonial-content>
            <qna-content></qna-content>
            <getstarted-content></getstarted-content>
            <footer-content></footer-content>
      `;
    },

    async afterRender() {
        showLoadingSpinner();

        const navbar = document.querySelector("navbar-content");
        navbar.style.display = "block";


        let lastScrollY = window.scrollY;
        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY) {
                navbar.classList.add("navbar-hidden")
            } else {
                navbar.classList.remove("navbar-hidden")
            }

            lastScrollY = window.scrollY;

            if (window.scrollY <= 0) {
                navbar.classList.remove('navbar-hidden')
            }
        });

        // faq 
        const faqElements = document.querySelectorAll('.content-item');

        faqElements.forEach((faq) => {
            faq.addEventListener('click', () => {
                faq.classList.toggle('active');
            });
        });

        hideLoadingSpinner();
    },
};

export default Home;