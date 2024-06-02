class About extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container-about">
                <div class= "content">
                    <div class="text-head">
                    <h1>Kami menjadikan pembelajaran lebih<span> menyenangkan</span> untuk semua orang</h1>
                </div>
            </div>
                <div class="main-content">
                    <div class="img-content">
                        <img src="about/kosong.png" alt="about">
                    </div>
                    <div class="text-content">
                        <h2>Rasakan <span>pengalaman</span> belajar yang luar biasa</h2>
                        <p>Dengan jaksara anda bisa merasakan proses pembelajaran yang belum pernah anda rasakan sebelumnya, ini tentunya sudah bisa anda nikmati sekarang</p>

                        <div class= "btn">
                            <a href="#/question1">Mulai Sekarang</a>
                        </div>
                    </div>
                </div>

                <div class="main-content content-two">
                    <div class="text-content">
                        <h2>Materi pembelajaran yang sudah <span>terstruktur</span></h2>
                        <p>Materi yang kami berikan bisa anda pilih sesuai dengan
                        pemahaman anda dan level anda, anda bisa memilih
                        materi dari termudah sampai tersulit</p>

                        <div class= "btn">
                            <a href="#/question1">Mulai Sekarang</a>
                        </div>
                    </div>
                    <div class="img-content">
                        <img src="about/kosong.png" alt="about">
                    </div>
                </div>
            </div>
        `;
    };
};

customElements.define('about-content', About);