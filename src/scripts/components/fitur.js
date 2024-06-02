class Fitur extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container-fitur">
                <div class= "content">
                    <div class="text-head">
                        <h1>Cukup untuk <span>menyelesaikan</span> permasalahan belajarmu.</h1>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card-fitur">
                        <img src="/feature/book.svg" alt="book">
                        <div class="text-card">
                            <h2>Belajar Terstuktur</h2>
                            <p>Materi belajar yang lengkap mulai dari dasar hingga sampai lanjutan bisa anda gunakan.</p>
                        </div>
                    </div>
                    <div class="card-fitur">
                        <img src="/feature/comunity.svg" alt="book">
                        <div class="text-card">
                            <h2>Komunitas Belajar</h2>
                            <p>Anda bisa bergabung dengan komunitas untuk bisa saling berbagi ilmu.</p>
                        </div>
                    </div>
                    <div class="card-fitur">
                        <img src="/feature/game.svg" alt="book">
                        <div class="text-card">
                            <h2>Kuis dan Latihan</h2>
                            <p>Latihlah pemahaman anda dengan mengerjakan kuis yang interaktif</p>
                        </div>
                    </div>
                    <div class="card-fitur">
                        <img src="/feature/help.svg" alt="book">
                        <div class="text-card">
                            <h2>Pusat Bantuan</h2>
                            <p>Saat ada masalah saat belajar anda bisa meminta bantuan dengan mudah</p>
                        </div>
                    </div>
                    <div class="card-fitur">
                        <img src="/feature/progress.svg" alt="book">
                        <div class="text-card">
                            <h2>Progres Belajar</h2>
                            <p>Mencatat selalu progres pembelajarnmu agar bisa belajar secara efektif</p>
                        </div>
                    </div>
                    <div class="card-fitur">
                        <img src="/feature/materi.svg" alt="book">
                        <div class="text-card">
                            <h2>Materi Kekinian</h2>
                            <p>Semua materi sudah kekinian sehingga anda bisa memahami lebih mudah</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };
};

customElements.define('fitur-content', Fitur);