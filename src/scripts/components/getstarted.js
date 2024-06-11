class Getstarted extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="getstarted-container">
                <div class="text-content">
                    <h1>Belajar bahasa jawa dengan jaksara</h1>
                    <div class="btn">
                        <a href="#/select">Mulai Sekarang</a>
                    </div>
                </div>
            </section>
        `;
    };
};

customElements.define('getstarted-content', Getstarted);