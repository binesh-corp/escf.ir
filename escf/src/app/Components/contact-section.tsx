export function ContactSection(){
    return (
        <section dir="ltr" className="contact-section fix section-padding">
            <div className="contact-shape">
                <img src="/images/contact-shape.png" alt="img"/>
            </div>
            <div className="auto-container">
                <div className="contact-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-8" dir="rtl">
                            <div className="contact-content-1">
                                <div className="sec-title mb-0">
                                    <h6 className="sub-title text-white wow fadeInUp">
                                        <span className="triangle triangle1"></span>
                                        <span className="triangle triangle2"></span>
                                        ارتباط با ما
                                    </h6>
                                    <h2 className="text-white wow fadeInUp" data-wow-delay=".2s">خبرهای خوبی برای شما داریم. با ما تماس بگیرید ...</h2>
                                </div>
                                <form action="#" className="form-box wow fadeInUp" data-wow-delay=".3s">
                                    <div className="row g-4">
                                        <div className="col-md-12">
                                            <div className="form-clt">
                                                <input type="text" name="name" id="name" placeholder="نام*"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-clt">
                                                <input type="text" name="name" id="email" placeholder="آدرس ایمیل"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-clt">
                                                <input type="text" name="name" id="phone" placeholder="شماره موبایل"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-clt">
                                                <textarea name="message" id="message" placeholder="پیام"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-clt">
                                                <button className="theme-btn btn-style-one w-100" type="submit">ثبت و ارسال</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </div>
            <div className="contact-image-1">
                <img src="/images/contact-image.jpg" alt="img" className="wow img-custom-anim-right"/>
                <div className="shape-image">
                    <img src="/images/shape-1.png" alt="img"/>
                </div>
                <div className="contact-info-box float-bob-y" dir="rtl">
                    <h2>سوالی بی پاسخ مانده است ؟</h2>
                    <ul className="contact-list">
                        <li>
                            <div className="icon">
                                <i className="lnr-icon-phone-handset"></i>
                            </div>
                            <div className="content">
                                <h3>به ما زنگ بزنید</h3>
                                <p><a href="tel:+184084152569">+98 912 97 33 256</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="lnr-icon-envelope"></i>
                            </div>
                            <div className="content">
                                <h3>ایمیل بزنید</h3>
                                <p><a href="/cdn-cgi/l/email-protection#15737c7b76797c6d557a606778747c793b767a78"><span className="__cf_email__" data-cfemail="1c7a75727f7075645c73696e717d7570327f7371">info@escf.ir</span></a></p>
                            </div>
                        </li>
                    </ul>
                    <span className="ellipse-bg"></span>
                </div>
            </div>
        </section>

    );
}