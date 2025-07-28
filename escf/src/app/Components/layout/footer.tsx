import Logo from "@/app/Components/Logo";

export default function Footer(){
    return (
        <footer className="footer-section-1 fix footer-bg bg-cover"
                style={{backgroundImage: "url(images/footer-shape.png)"}}>
            <span className="circle-shape"></span>
            <span className="circle-shape-2"></span>
            <div className="auto-container">

                <div className="footer-widget-wrapper">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="footer-widget-items mt-30">
                                <div className="widget-title mb-25">
                                    <a href="/" className="footer-logo">
                                        <Logo/>
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <p>پلتفرم ESCF  با ارائه راهکارها و ابزارهای مختلف مالی مانند: وام‌های متناسب با کسب‌وکارهای کوچک و بزرگ، خرید دین، اوراق گام و … به بنگاه‌های شما کمک می‌کند تا با دیگر بنگاه‌ها وجه تمایز داشته باشید.</p>
                                    <div className="social-icon">
                                        <a href="#"><i className="fa-brands fa-telegram"></i></a>
                                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="footer-widget-items mt-30">
                                <div className="widget-title mb-25">
                                    <h3 className="font-size-24 text-white font-weight-500">بیشتر بدانید</h3>
                                </div>
                                <ul className="user-links">
                                    <li><a href="index.html">سیاست حریم خصوصی</a></li>
                                    <li><a href="page-about.html">وبلاگ</a></li>
                                    <li><a href="page-services.html">آموزش های پنل</a></li>
                                    <li><a href="page-contact.html">شرایط همکاری</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="footer-widget-items mt-30">
                                <div className="widget-title mb-25">
                                    <h3 className="font-size-24 text-white font-weight-500">SLA</h3>
                                </div>
                                <ul className="user-links">
                                    <li><a href="#">پنل فاینانس</a></li>
                                    <li><a href="#">پنل متقاضی</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="footer-widget-items mt-30">
                                <div className="widget-title mb-25">
                                    <h3 className="font-size-24 text-white font-weight-500">راه های ارتباطی</h3>
                                </div>
                                <ul className="contact-list">
                                    <li>
                                        <i className="lnr-icon-phone-handset"></i>
                                        <p><a href="tel:+1050055900" dir="ltr">۰۲۱ ۲۲ ۹۰ ۷۳ ۲۶</a></p>
                                    </li>
                                    <li>
                                        <i className="lnr-icon-envelope"></i>
                                        <p><a
                                            href="/cdn-cgi/l/email-protection#76101f18151a1f0e361e131a06580305"><span
                                            className="__cf_email__"
                                            data-cfemail="d395babdb0bfbaab93bbb6bfa3fda6a0">info@escf.ir</span></a>
                                        </p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <p className="wow fadeInUp" data-wow-delay=".3s">تولید شده در آژانس نرم افزاری راهکار</p>
                </div>
            </div>
        </footer>
    );
}