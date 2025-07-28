export default function NewsSecton(){
    return (
        <section className="news-secton section-padding fix">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <h6 className="sub-title wow fadeInUp">
                        <span className="triangle triangle1"></span>
                        <span className="triangle triangle2"></span>
                        Testimonails
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Insights from Latest Blog</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-box-items">
                            <div className="news-image">
                                <img src="/images/news-01.jpg" alt="img"/>
                                <img src="/images/news-01.jpg" alt="img"/>
                                <span className="post-box">
                    <span className="date">20</span>
                    <span className="month">March</span>
                  </span>
                            </div>
                            <div className="news-content">
                                <ul className="comments-list">
                                    <li><i className="lnr-icon-user1"></i> Admin</li>
                                    <li><i className="lnr-icon-comment"></i> 3 Comments</li>
                                </ul>
                                <h3>
                                    <a href="news-details.html">Errors with financial consequences in tax ?</a>
                                </h3>
                                <a href="news-details.html" className="link-btn">
                                    Learn More
                                    <span className="icon"><i className="lnr-icon-arrow-left"></i></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="news-box-items">
                            <div className="news-image">
                                <img src="/images/news-02.jpg" alt="img"/>
                                <img src="/images/news-02.jpg" alt="img"/>
                                <span className="post-box">
                    <span className="date">25</span>
                    <span className="month">March</span>
                  </span>
                            </div>
                            <div className="news-content">
                                <ul className="comments-list">
                                    <li><i className="lnr-icon-user1"></i> Admin</li>
                                    <li><i className="lnr-icon-comment"></i> 3 Comments</li>
                                </ul>
                                <h3>
                                    <a href="news-details.html">Achieving Work Life Balance in a Hectic World</a>
                                </h3>
                                <a href="news-details.html" className="link-btn">
                                    Learn More
                                    <span className="icon">
                      <i className="lnr-icon-arrow-left"></i>
                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="news-box-items">
                            <div className="news-image">
                                <img src="/images/news-03.jpg" alt="img"/>
                                <img src="/images/news-03.jpg" alt="img"/>
                                <span className="post-box">
                    <span className="date">30</span>
                    <span className="month">March</span>
                  </span>
                            </div>
                            <div className="news-content">
                                <ul className="comments-list">
                                    <li><i className="lnr-icon-user1"></i> Admin</li>
                                    <li><i className="lnr-icon-comment"></i> 3 Comments</li>
                                </ul>
                                <h3>
                                    <a href="news-details.html">Mastering Work-Life On Target Business Goal </a>
                                </h3>
                                <a href="news-details.html" className="link-btn">
                                    Learn More
                                    <span className="icon">
                      <i className="lnr-icon-arrow-left"></i>
                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}