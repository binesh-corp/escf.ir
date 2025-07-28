export default function ProjectSection(){
    return (
        <section className="project-section fix section-padding">
            <div className="shape-1">
                <img src="/images/shape-1.png" alt="img"/>
            </div>
            <div className="shape-2">
                <img src="/images/shape-2.png" alt="img"/>
            </div>
            <div className="auto-container">
                <div className="sec-title">
                    <div className="row g-4 justify-content-between align-items-end">
                        <div className="col-xl-7 col-lg-9">
                            <h6 className="sub-title wow fadeInUp">
                                <span className="triangle triangle1"></span>
                                <span className="triangle triangle2"></span>
                                مطالعات موردی
                            </h6>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">شما ترجیح می‌دهید کنترل کامل <br/>مسائل
                                کسب‌وکار را داشته باشید</h2>
                        </div>
                        <div className="col-xl-5 col-lg-3 wow fadeInUp" data-wow-delay=".4s">
                            <div style={{float: "left"}} dir="ltr" className="array-button justify-content-end">
                                <button className="array-prev"><i className="fa-regular fa-arrow-left"></i></button>
                                <button className="array-next"><i className="fa-regular fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-wrapper">
                    <div className="swiper project-slider fix">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="project-card-items">
                                    <div className="project-image">
                                        <img src="/images/project-01.jpg" alt="img"/>
                                        <img src="/images/project-01.jpg" alt="img"/>
                                        <span className="number">01</span>
                                    </div>
                                    <div className="project-content">
                                        <div className="arrow-shape">
                                            <img src="/images/arrow-shape.png" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h3><a href="page-project-details.html">فناوری اطلاعات</a></h3>
                                            <p>تکنولوژی کسب‌وکار</p>
                                        </div>
                                        <a href="page-project-details.html" className="icon">
                                            <i className="lnr-icon-arrow-left"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="project-card-items">
                                    <div className="project-image">
                                        <img src="/images/project-02.jpg" alt="img"/>
                                        <img src="/images/project-02.jpg" alt="img"/>
                                        <span className="number">02</span>
                                    </div>
                                    <div className="project-content">
                                        <div className="arrow-shape">
                                            <img src="/images/arrow-shape.png" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h3><a href="page-project-details.html">اورین فایننس</a></h3>
                                            <p>اورین فایننس</p>
                                        </div>
                                        <a href="page-project-details.html" className="icon">
                                            <i className="lnr-icon-arrow-left"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="project-card-items">
                                    <div className="project-image">
                                        <img src="/images/project-03.jpg" alt="img"/>
                                        <img src="/images/project-03.jpg" alt="img"/>
                                        <span className="number">03</span>
                                    </div>
                                    <div className="project-content">
                                        <div className="arrow-shape">
                                            <img src="/images/arrow-shape.png" alt="img"/>
                                        </div>
                                        <div className="content">
                                            <h3><a href="page-project-details.html">شرکت کسب‌وکار</a></h3>
                                            <p>شرکت کسب‌وکار</p>
                                        </div>
                                        <a href="page-project-details.html" className="icon">
                                            <i className="lnr-icon-arrow-left"></i>
                                        </a>
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