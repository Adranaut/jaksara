class Getstarted extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="getstarted-container">
                <div class="text-content">
                    <h1>Belajar bahasa jawa dengan jaksara</h1>
                    <button class="btn">Mulai Sekarang</button>
                </div>
            </section>
        `;
    };
};

customElements.define('getstarted-content', Getstarted);