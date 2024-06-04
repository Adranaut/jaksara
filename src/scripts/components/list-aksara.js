class Aksara extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="aksara-container" id="resto-content">
                <div class="text-head">
                    <h1>Belajar Sekarang!</h1>
                </div>
                <div class="aksara" id="card-aksara"></div>
            </div>
        `;
    };
};

customElements.define('list-aksara', Aksara);