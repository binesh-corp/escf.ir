export default function TestimonialSection(){
    return (
        <section className="testimonial-section fix section-padding">
            <div className="auto-container">
                <div className="testimonial-wrapper bg-cover" style={{backgroundImage: "url(images/home-1/testimonial/testimonial-bg.png)"}}>
                    <div className="sec-title text-center">
                        <h6 className="sub-title wow fadeInUp">
                            <span className="triangle triangle1"></span>
                            <span className="triangle triangle2"></span>
                            Testimonials
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            What our top Customers <br/>
                            Say About us
                        </h2>
                    </div>
                    <div className="swiper testimonial-slider fix">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial-box-items">
                                    <div className="client-info-items" dir="ltr">
                                        <div className="client-image">
                                            <img src="/images/client-01.png" alt="img"/>
                                            <div className="quote-icon">
                                                <i className="lnr-icon-quote"></i>
                                            </div>
                                        </div>
                                        <div className="client-content" dir="rtl">
                                            <h5>Alison Hedge</h5>
                                            <span>CEO &amp; Founder</span>
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p>Everyone receives valuable and rewarding returns on their trading, purchases, and investments. There are many variations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-box-items">
                                    <div className="client-info-items" dir="ltr">
                                        <div className="client-image">
                                            <img src="/images/client-02.png" alt="img"/>
                                            <div className="quote-icon">
                                                <i className="lnr-icon-quote"></i>
                                            </div>
                                        </div>
                                        <div className="client-content" dir="rtl">
                                            <h5>Eleanor Pena</h5>
                                            <span>Head Of Design</span>
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p>Everyone receives valuable and rewarding returns on their trading, purchases, and investments. There are many variations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="testimonial-box-items">
                                    <div className="client-info-items" dir="ltr">
                                        <div className="client-image">
                                            <img src="/images/client-03.png" alt="img"/>
                                            <div className="quote-icon">
                                                <i className="lnr-icon-quote"></i>
                                            </div>
                                        </div>
                                        <div className="client-content" dir="rtl">
                                            <h5>Jenny Wilson</h5>
                                            <span>team Manager</span>
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="star">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p>Everyone receives valuable and rewarding returns on their trading, purchases, and investments. There are many variations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-dot mt-5 mb-0">
                            <div className="dot2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}