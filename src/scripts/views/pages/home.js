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

        // navbar scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            const scrollY = window.scrollY;

            sections.forEach(sec => {
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');
                const link = document.querySelector('header nav a[href="#' + id + '"]');

                if (scrollY >= offset && scrollY < offset + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    if (link) {
                        link.classList.add('active');
                    }
                }
            });
        };

        hideLoadingSpinner();
    },
};

export default Home;