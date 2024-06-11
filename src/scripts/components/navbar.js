class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="header-container">
                <div class="logo">
                    <a href="#">
                        <img src="/logo/brand.svg" alt= "img-logo">
                    </a>
                </div>
                <button id="hamburger" aria-label="Navigasi menu"></button>
                <nav id="drawer">
                    <ul>
                        <li>
                            <a href="#about-section" class="active">Tentang</a>
                        </li>
                        <li>
                            <a href="#fitur-section">Fitur</a>
                        </li>
                        <li>
                            <a href="#testimonial-section">Testimonial</a>
                        </li>
                        <li>
                            <a href="#question">Pertanyaan</a>
                        </li>
                    </ul>
                </nav>
                <div class= "btn">
                    <a href="#/select">Mulai Sekarang</a>
                </div>
            </div>
        `;
    };
};

customElements.define('navbar-content', Navbar);