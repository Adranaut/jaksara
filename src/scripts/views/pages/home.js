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