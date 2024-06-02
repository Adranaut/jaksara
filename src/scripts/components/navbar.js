class Navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="header-container">
                <div class="logo">
                    <a href="#">
                        <h2>Jaksara</h2>
                    </a>
                </div>
                <button id="hamburger" aria-label="Navigasi menu"></button>
                <nav id="drawer">
                    <ul>
                        <li>
                            <a href="#">Tentang</a>
                        </li>
                        <li>
                            <a href="#">Fitur</a>
                        </li>
                        <li>
                            <a href="#">Testimonial</a>
                        </li>
                        <li>
                            <a href="#">Pertanyaan</a>
                        </li>
                    </ul>
                </nav>
                <div class= "btn">
                    <a href="#/question1">Mulai Sekarang</a>
                </div>
            </div>
        `;
    };
};

customElements.define('navbar-content', Navbar);