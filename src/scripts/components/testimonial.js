class Testimonial extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="section-testimonial" id="testimonial-section">
                <div class="container-testimonial">
                    <div class= "content">
                        <div class="text-head">
                            <img src="/testimonial/star.svg" alt="img-testimoni">
                            <div class="mini-text">YANG DIRASAKAN BANYAK ORANG</div>
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
                                    <h2>Benjamin Jackson</h2>
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
                                    <h2>Muhamad Ibrahim</h2>
                                    <p>Student</p>
                                </div>
                            </div>
                        </article>
                        <article class="card-testimonial" tabindex="0">
                            <div class="text-card">
                                <p tabindex="0">"Saya suka kuis interaktifnya. Membuat belajar terasa seperti bermain game. Sangat membantu meningkatkan kemampuan saya."</p>
                            </div>
                            <div class="profile">
                                <img src="testimonial/testi3.png" alt="testimonial" width="50 ">
                                <div class="text-profile">
                                    <h2>Lia Amelia</h2>
                                    <p>Student</p>
                                </div>
                            </div>
                        </article>
                        <article class="card-testimonial" tabindex="0">
                            <div class="text-card">
                                <p tabindex="0">"Fitur belajar dan kuisnya sangat bermanfaat, tidak membosankan sehingga sekarang saya merasa lebih percaya diri berbicara bahasa Jawa."</p>
                            </div>
                            <div class="profile">
                                <img src="testimonial/testi4.png" alt="testimonial" width="50 ">
                                <div class="text-profile">
                                    <h2>James Rodriguez</h2>
                                    <p>Software Engineer</p>
                                </div>
                            </div>
                        </article>
                        <article class="card-testimonial" tabindex="0">
                            <div class="text-card">
                                <p tabindex="0">"Web ini benar-benar membantu saya memahami aksara Jawa. Antarmuka yang ramah pengguna dan materi yang mudah dipahami"</p>
                            </div>
                            <div class="profile">
                                <img src="testimonial/testi5.png" alt="testimonial" width="50 ">
                                <div class="text-profile">
                                    <h2>Alysa</h2>
                                    <p>Software Engineer</p>
                                </div>
                            </div>
                        </article>
                        <article class="card-testimonial" tabindex="0">
                            <div class="text-card">
                                <p tabindex="0">"Web yang sangat menarik dan edukatif. Kuis interaktif membuat belajar menyenangkan dan Kombinasi pelajaran dan kuis efektif."</p>
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
            </div>
        `;
    };
};

customElements.define('testimonial-content', Testimonial);