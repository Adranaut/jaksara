class Fitur extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="container-fitur" id= "fitur-section">
                <div class= "content">
                    <div class="text-head"> 
                        <div class="mini-text">FITUR TERBAIK MEMUDAHKAN BELAJARMU</div>
                        <h1><span>Cukup untuk menyelesaikan</span> permasalahan belajarmu.</h1>
                    </div>
                </div>
                <div class="grid-card">
                    <div class="grid-item item1">
                        <div class="text-content">
                            <h2>Kuis dan Latihan membuat belajar menjadi efektif</h2>
                            <p>Latihlah pemahaman anda dengan mengerjakan kuis yang interaktif dan anda tidak akan merasa bosan</p>
                        </div>
                        <div class="img-content">
                            <img src="/feature/Group 586984.svg" alt="">
                        </div>
                    </div>
                    <div class="grid-item item2">
                        <div class="text-content">
                            <h2>Komunitas untuk menambah teman</h2>
                        </div>
                        <div class="img-content-2">
                            <img src="/feature/peaple.svg" alt="">
                        </div>
                    </div>
                    <div class="grid-item item3">
                        <div class="text-content">
                            <h2>Belajar Dimanapun dengan Jaksara</h2>
                        </div>
                        <div class="img-content-3">
                            <img src="/feature/manapun.svg" alt="">
                        </div>
                    </div>
                    <div class="grid-item item4">
                        <div class="text-content">
                            <h2>Materi yang sudah kami sesuaikan untuk kamu</h2>
                            <p>Latihlah pemahaman aksara anda dengan mengerjakan kuis yang interaktif</p>
                        </div>
                        <div class="img-content">
                            <img src="/feature/aksara.svg" alt="">
                        </div>
                    </div>
                </div>
            </section>
        `;
    };
};

customElements.define('fitur-content', Fitur);