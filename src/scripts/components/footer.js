class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer class="footer-container">
                <div class="item-logo">
                    <div class="logo">
                        <a href="#">
                            <h2>Jaksara</h2>
                        </a>
                    </div>
                    <p>Hak cipta situs © 2024 - Jaksara</p>
                </div>
                <div class="item">
                    <h3>Tentang</h3>
                    <ul>
                        <li>
                            <a href="#">Materi Aksara</a>
                        </li>
                        <li>
                            <a href="#">Quis</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div class="item">
                    <h3>Pusat Bantuan</h3>
                    <ul>
                        <li>
                            <a href="#">Jaksara FAQs</a>
                        </li>
                        <li>
                            <a href="#">Whatsapp</a>
                        </li>
                        <li>
                            <a href="#">Email</a>
                        </li>
                    </ul>
                </div>
                <div class="item">
                    <h3>Privacy dan Policy</h3>
                    <ul>
                        <li>
                            <a href="#">Terms</a>
                        </li>
                        <li>
                            <a href="#">Privacy</a>
                        </li>
                        <li>
                            <a href="#">Comunity</a>
                        </li>
                    </ul>
                </div>
                <div class="item">
                    <h3>Sosial Media</h3>
                    <ul>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                    </ul>
                </div>
            </footer>
        `;
    };
};

customElements.define('footer-content', Footer);