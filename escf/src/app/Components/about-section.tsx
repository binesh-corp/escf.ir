export default function AboutSection(){
    return (
        <section className="about-section section-padding">
            <div className="star-shape bounce-y">
                <img src="/images/star-shape.png" alt="img"/>
            </div>
            <div className="arrow-shape-1 bounce-x">
                <img src="/images/arrow-1.png" alt="img"/>
            </div>
            <div className="arrow-shape-2 bounce-y">
                <img src="/images/arrow-2.png" alt="img"/>
            </div>
            <div className="auto-container">
                <div className="row g-4 align-items-center">
                    <div className="col-xl-6">
                        <div className="about-image-1 wow img-custom-anim-left">
                            <img src="/images/about-image.png" alt="img"/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-content-1">
                            <div className="sec-title mb-0">
                                <h6 className="sub-title wow fadeInUp">
                                    <span className="triangle triangle1"></span>
                                    <span className="triangle triangle2"></span>
                                    ما کی هستیم
                                </h6>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">افزایش سرمایه شما به صورت سیستماتیک</h2>
                            </div>
                            <div className="icon-items wow fadeInUp" data-wow-delay=".4s">
                                <div className="icon">
                                    <i className="lnr-icon-briefcase"></i>
                                </div>
                                <p>هر کسی با پاداش بالا و مفید برای معاملات، خرید و سرمایه‌گذاری خود</p>
                            </div>
                            <p className="about-text wow fadeInUp" data-wow-delay=".6s">هر کسی با پاداش بالا و مفید برای معاملات، خرید و سرمایه‌گذاری خود. هدف ما این است که</p>
                            <div className="about-list-items">
                                <ul className="about-list wow fadeInUp" data-wow-delay=".8s">
                                    <li><span className="icon"> <i className="fa-solid fa-check"></i> </span> محافظت از شرکت شما</li>
                                    <li><span className="icon"> <i className="fa-solid fa-check"></i> </span> ما راهکارهایی به شما ارائه می‌دهیم</li>
                                    <li><span className="icon"> <i className="fa-solid fa-check"></i> </span> ما از شما مراقبت می‌کنیم</li>
                                    <li><span className="icon"> <i className="fa-solid fa-check"></i> </span> هر کسی با پاداش بالا</li>
                                </ul>
                                <div className="counter-box bg-cover wow fadeInUp" data-wow-delay=".8s">
                                    <div className="butterfly-shape"><img src="/images/butterfly.png" alt="img"/></div>
                                    <div className="count-box"><h2><span className="count-text" data-speed="3000" data-stop="25">0</span> +</h2></div>
                                    <div className="counter-bottom">
                                        <p>سال تجربه</p>
                                        <div className="icon"><i className="flaticon-business-006-target"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}