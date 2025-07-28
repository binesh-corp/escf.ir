import Logo from "@/app/Components/Logo";

export default function Header(){
    return (
        <header className="main-header header-style-one header-1">

            <div className="header-lower">

                <div className="main-box">

                    <div className="nav-outer">
                        <div className="logo-box">
                            <div className="logo">
                                <a href="/"><Logo/></a>
                            </div>
                        </div>

                        <div className="outer-box">
                            <nav className="nav main-menu">
                                <ul className="navigation">
                                    <li><a href="/manager">پنل کارگزار</a></li>
                                    <li><a href="/finance">پنل فاینانسر</a></li>
                                    <li><a href="#">درباره ما</a></li>

                                </ul>
                            </nav>

                            {/*<div className="ui-btn-outer">*/}
                            {/*    <div className="header-contact">*/}
                            {/*        <div className="social-icon">*/}
                            {/*            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>*/}
                            {/*            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>*/}
                            {/*            <a href="#"><i className="fa-brands fa-instagram"></i></a>*/}
                            {/*        </div>*/}
                            {/*        <a href="tel:+92(8800)9806" className="info-btn">*/}
                            {/*            <i className="icon fa fa-phone"></i>*/}
                            {/*            + 88 ( 9800 ) 6802*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <a href="/corporate" className="theme-btn btn-style-one">پنل متقاضی</a>


                            <div className="mobile-nav-toggler"><span className="icon lnr-icon-bars"></span></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mobile-menu">
                <div className="menu-backdrop"></div>


                <nav className="menu-box">
                    <div className="upper-box">
                        <div className="nav-logo">
                            <a href="index.html"><img src="/images/white-logo.png" alt=""/></a>
                        </div>
                        <div className="close-btn"><i className="icon fa fa-times"></i></div>
                    </div>

                    <ul className="navigation clearfix">

                    </ul>
                    <ul className="contact-list-one">
                        <li>

                            <div className="contact-info-box">
                                <i className="icon lnr-icon-phone-handset"></i>
                                <span className="title">Call Now</span>
                                <a href="tel:+92880098670">+92 (8800) - 98670</a>
                            </div>
                        </li>
                        <li>

                            <div className="contact-info-box">
                                <span className="icon lnr-icon-envelope1"></span>
                                <span className="title">Send Email</span>
                                <a href="/cdn-cgi/l/email-protection#0a626f667a4a6965677a6b647324696567"><span
                                    className="__cf_email__" data-cfemail="49212c2539092a262439282730672a2624">[email protected]</span></a>
                            </div>
                        </li>
                        <li>

                            <div className="contact-info-box">
                                <span className="icon lnr-icon-clock"></span>
                                <span className="title">Send Email</span>
                                Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                            </div>
                        </li>
                    </ul>

                    <ul className="social-links">
                        <li>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-pinterest"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </nav>
            </div>


            <div className="sticky-header">
                <div className="auto-container">
                    <div className="inner-container">

                        <div className="logo">
                            <a href="index.html"><img src="/images/black-logo.png" alt="img"/></a>
                        </div>


                        <div className="nav-outer">

                            <nav className="main-menu">
                                <div className="navbar-collapse show collapse clearfix">
                                    <ul className="navigation clearfix">

                                    </ul>
                                </div>
                            </nav>


                            <div className="mobile-nav-toggler"><span className="icon lnr-icon-bars"></span></div>
                        </div>
                    </div>
                </div>
            </div>

        </header>

    );
}