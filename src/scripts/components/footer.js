class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer>
                <div class="footer-container">
                    <div class="item-logo">
                        <div class="logo">
                            <a href="#">
                                <img src="/logo/brand-footer.svg" alt= "img-logo">
                            </a>
                        </div>
                        <p>Hak cipta situs © 2024 - Jaksara</p>
                    </div>
                    <div class="item">
                            <h2>Menu</h2>
                            <ul>
                                <li>
                                    <a href="#">Aksara</a>
                                </li>
                                <li>
                                    <a href="#">Quis</a>
                                </li>
                            </ul>
                        </div>
                        <div class="item">
                            <h2>Pusat Bantuan</h2>
                            <ul>
                                <li>
                                    <a href="#">Jaksara FAQs</a>
                                </li>
                                <li>
                                    <a href="#">Email</a>
                                </li>
                                <li>
                                    <a href="#">Handphone</a>
                                </li>
                            </ul>
                        </div>
                        <div class="item">
                            <h2>Privacy dan Policy</h2>
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
                            <h2>Sosial Media</h2>
                            <ul>
                                <li>
                                    <a href="#">Instagram</a>
                                </li>
                                <li>
                                    <a href="#">Twitter</a>
                                </li>
                                <li>
                                    <a href="#">facebook</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </footer>
        `;
    };
};

customElements.define('footer-content', Footer);