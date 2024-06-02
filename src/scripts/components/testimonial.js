class Testimonial extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container-testimonial">
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
                            <p tabindex="0">"This application really helped me find a restaurant that suits my taste. Apart from that the UI/UX is very good, highly recommended!"</p>
                        </div>
                        <div class="profile">
                            <img src="testimonial/testi2.png" alt="testimonial" width="50 ">
                            <div class="text-profile">
                                <h3>Benjamin Jackson</h3>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </article>
                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                            <p tabindex="0">"This application really helped me find a restaurant that suits my taste. Apart from that the UI/UX is very good, highly recommended!"</p>
                        </div>
                        <div class="profile">
                            <img src="testimonial/testi3.png" alt="testimonial" width="50 ">
                            <div class="text-profile">
                                <h3>Benjamin Jackson</h3>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </article>
                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                            <p tabindex="0">"This application really helped me find a restaurant that suits my taste. Apart from that the UI/UX is very good, highly recommended!"</p>
                        </div>
                        <div class="profile">
                            <img src="testimonial/testi4.png" alt="testimonial" width="50 ">
                            <div class="text-profile">
                                <h3>Benjamin Jackson</h3>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </article>
                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                            <p tabindex="0">"This application really helped me find a restaurant that suits my taste. Apart from that the UI/UX is very good, highly recommended!"</p>
                        </div>
                        <div class="profile">
                            <img src="testimonial/testi5.png" alt="testimonial" width="50 ">
                            <div class="text-profile">
                                <h3>Benjamin Jackson</h3>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </article>
                    <article class="card-testimonial" tabindex="0">
                        <div class="text-card">
                            <p tabindex="0">"This application really helped me find a restaurant that suits my taste. Apart from that the UI/UX is very good, highly recommended!"</p>
                        </div>
                        <div class="profile">
                            <img src="testimonial/testi6.png" alt="testimonial" width="50 ">
                            <div class="text-profile">
                                <h3>Benjamin Jackson</h3>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        `;
    };
};

customElements.define('testimonial-content', Testimonial);