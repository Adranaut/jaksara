class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="hero-container">
                <div class= "text-content">
                    <div class="text-wrapper">
                        <h1>Belajar <span>bahasa jawa</span> dengan efektif dan menyenangkan. <h1>
                        <p>Tingkatkan kemampuan bahasa Jawa Anda dengan belajar dan bermain kuis interaktif yang membuat anda tidak merasa bosan</p>
                    </div>

                    <div class= "btn">
                        <a href="#/select">Mulai Sekarang <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" id="arrow"><g fill="none" fill-rule="evenodd" stroke="#1E1E1E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M1 7h16M11 1l6 6-6 6"></path></g></svg></a>
                    </div>
                </div>
                <div class= "img-content">
                    <img src="/hero/ilustration.svg" alt="img-hero">
                </div>
            </section>
        `;
    };
};

customElements.define('hero-content', Hero);