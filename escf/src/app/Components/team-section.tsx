export default function TeamSection(){
    return (
        <section className="team-section fix">
            <div className="team-wrapper section-padding">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <h6 className="sub-title wow fadeInUp">
                            <span className="triangle triangle1"></span>
                            <span className="triangle triangle2"></span>
                            تیم ما
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">
                            اعضای با تجربه <br/>
                            تیم ما
                        </h2>
                    </div>
                    <div className="team-bg-shape section-bg">
                        <img src="/images/team-bg-shape.png" alt="img"/>
                    </div>
                </div>
                <div className="swiper team-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="team-box-items">
                                <div className="team-image">
                                    <img src="/images/team-01.jpg" alt="img"/>
                                    <img src="/images/team-01.jpg" alt="img"/>
                                    <div className="arrow-shape"><img src="/images/arrow-shape.png" alt="img"/></div>
                                    <div className="team-content">
                                        <div className="content">
                                            <h4><a href="page-team-details.html">احمد رضایی</a></h4>
                                            <p>مدیر ارشد</p>
                                        </div>
                                        <div className="social-links">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                        <span className="share-icon fa fa-share-alt"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="team-box-items">
                                <div className="team-image">
                                    <img src="/images/team-02.jpg" alt="img"/>
                                    <img src="/images/team-02.jpg" alt="img"/>
                                    <div className="arrow-shape"><img src="/images/arrow-shape.png" alt="img"/></div>
                                    <div className="team-content">
                                        <div className="content">
                                            <h4><a href="page-team-details.html">فاطمه محمدی</a></h4>
                                            <p>بنیانگذار، اسکف</p>
                                        </div>
                                        <div className="social-links">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                        <span className="share-icon fa fa-share-alt"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="team-box-items">
                                <div className="team-image">
                                    <img src="/images/team-03.jpg" alt="img"/>
                                    <img src="/images/team-03.jpg" alt="img"/>
                                    <div className="arrow-shape"><img src="/images/arrow-shape.png" alt="img"/></div>
                                    <div className="team-content">
                                        <div className="content">
                                            <h4><a href="page-team-details.html">علی کریمی</a></h4>
                                            <p>مدیرعامل، اسکف</p>
                                        </div>
                                        <div className="social-links">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                        <span className="share-icon fa fa-share-alt"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="team-box-items">
                                <div className="team-image">
                                    <img src="/images/team-04.jpg" alt="img"/>
                                    <img src="/images/team-04.jpg" alt="img"/>
                                    <div className="arrow-shape"><img src="/images/arrow-shape.png" alt="img"/></div>
                                    <div className="team-content">
                                        <div className="content">
                                            <h4><a href="page-team-details.html">مریم احمدی</a></h4>
                                            <p>کارشناس ارشد</p>
                                        </div>
                                        <div className="social-links">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                        <span className="share-icon fa fa-share-alt"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="team-box-items">
                                <div className="team-image">
                                    <img src="/images/team-05.jpg" alt="img"/>
                                    <img src="/images/team-05.jpg" alt="img"/>
                                    <div className="arrow-shape"><img src="/images/arrow-shape.png" alt="img"/></div>
                                    <div className="team-content">
                                        <div className="content">
                                            <h4><a href="page-team-details.html">حسین نوری</a></h4>
                                            <p>مدیر، اسکف</p>
                                        </div>
                                        <div className="social-links">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                        <span className="share-icon fa fa-share-alt"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-dot">
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        </section>

    );
}