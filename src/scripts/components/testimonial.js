class Testimonial extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container-testimonial" id="testimonial-section">
                <div class= "content">
                    <div class="text-head">
                        <h1>Kami sudah <span>dipercaya</span> dan <span>dicintai</span> oleh Banyak Orang.</h1>
                    </div>
                </div>
                <div class="card-testi-container">
                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                            <p tabindex="0">"This application really helped me find a restaurant that suits my taste. Apart from that the UI/UX is very good, highly recommended!"</p>
                        </div>
                        <div class="profile">
                            <img src="testimonial/testi1.png" alt="testimonial" width="50 ">
                            <div class="text-profile">
                                <h3>Benjamin Jackson</h3>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </article>
                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                            <p tabindex="0">"Wooooow aplikasi ini luar biasa! Saya belajar bahasa Jawa dengan cepat dan menyenangkan. Interaktif dan mudah dipahami!"</p>
                        </div>
                        <div class="profile">
                            <img src="testimonial/testi2.png" alt="testimonial" width="50 ">
                            <div class="text-profile">
                                <h3>Muhamad Ibrahim</h3>
                                <p>Student</p>
                            </div>
                        </div>
                    </article>
                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                            <p tabindex="0">"Saya suka kuis interaktifnya. Membuat belajar bahasa Jawa terasa seperti bermain game. Sangat membantu meningkatkan kemampuan saya."</p>
                        </div>
                        <div class="profile">
                            <img src="testimonial/testi3.png" alt="testimonial" width="50 ">
                            <div class="text-profile">
                                <h3>Lia Amelia</h3>
                                <p>Student</p>
                            </div>
                        </div>
                    </article>
                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                            <p tabindex="0">"Fitur belajar dan kuisnya sangat bermanfaat.dan pembe;ajarannya yang tidak membosankan,sehingga sekarang saya merasa lebih percaya diri berbicara bahasa Jawa sekarang."</p>
                        </div>
                        <div class="profile">
                            <img src="testimonial/testi4.png" alt="testimonial" width="50 ">
                            <div class="text-profile">
                                <h3>James Rodriguez</h3>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </article>
                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                            <p tabindex="0">"Web ini benar-benar membantu saya memahami aksara Jawa. Antarmuka yang ramah pengguna dan materi yang terorganisir dengan baik sangat membantu saya mempelajari bahasa jawa"</p>
                        </div>
                        <div class="profile">
                            <img src="testimonial/testi5.png" alt="testimonial" width="50 ">
                            <div class="text-profile">
                                <h3>Alysa</h3>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </article>
                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                            <p tabindex="0">"Web yang sangat menarik dan edukatif. Kuis interaktif membuat belajar menyenangkan dan efektif, Kombinasi pelajaran dan kuis membuatnya berbeda dengan web yang ada di pasaran."</p>
                        </div>
                        <div class="profile">
                            <img src="testimonial/testi6.png" alt="testimonial" width="50 ">
                            <div class="text-profile">
                                <h3>Mason</h3>
                                <p>Designer</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        `;
    };
};

customElements.define('testimonial-content', Testimonial);