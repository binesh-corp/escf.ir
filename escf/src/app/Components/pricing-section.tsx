export default function PricingSection(){
    return (
        <section className="pricing-section fix section-padding">
            <div className="pricing-circle">
                <img src="/images/pricing-circle.png" alt="img"/>
            </div>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <h6 className="sub-title wow fadeInUp">
                        <span className="triangle triangle1"></span>
                        <span className="triangle triangle2"></span>
                        طرح‌های قیمت‌گذاری
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">طرح‌های محبوب قیمت‌گذاری ما <br/>برای شرکت‌ها</h2>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <a href="#Monthly" data-bs-toggle="tab" className="nav-link active"> ماهانه </a>
                    </li>
                    <li className="nav-item">
                        <a href="#Yearly" data-bs-toggle="tab" className="nav-link"> سالانه </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="Monthly" className="tab-pane fade show active">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="pricing-box-items">
                                    <div className="pricing-header">
                                        <div className="title-icon"><i className="flaticon-finance-Priicng-Plan"></i></div>
                                        <h3>طرح شخصی</h3>
                                        <span>سفارشی‌سازی هر چیزی در هر زمان</span>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> ویژگی‌های نامحدود</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> محتوای چند زبانه</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> ویژگی‌های آزمایشی رایگان 30 روزه</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> پشتیبان‌گیری و بازیابی داده</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> به‌روزرسانی از طریق داشبورد و اسلک</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> همگام‌سازی با پایگاه داده ابری</li>
                                    </ul>
                                    <div className="pricing-button">
                                        <a href="page-pricing.html" className="theme-btn btn-style-one w-100">2500 تومان/ ماه</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5">
                                <div className="pricing-box-items active">
                                    <span className="gt-price-tag">پیشنهاد</span>
                                    <div className="pricing-header">
                                        <div className="title-icon"><i className="flaticon-finance-Priicng-Plan"></i></div>
                                        <h3>طرح ویژه</h3>
                                        <span>سفارشی‌سازی هر چیزی در هر زمان</span>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> ویژگی‌های نامحدود</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> محتوای چند زبانه</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> ویژگی‌های آزمایشی رایگان 30 روزه</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> پشتیبان‌گیری و بازیابی داده</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> به‌روزرسانی از طریق داشبورد و اسلک</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> همگام‌سازی با پایگاه داده ابری</li>
                                    </ul>
                                    <div className="pricing-button">
                                        <a href="page-pricing.html" className="theme-btn btn-style-one w-100">انتخاب طرح قیمت‌گذاری</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7">
                                <div className="pricing-box-items">
                                    <div className="pricing-header">
                                        <div className="title-icon"><i className="flaticon-finance-Priicng-Plan"></i></div>
                                        <h3>طرح استاندارد</h3>
                                        <span>سفارشی‌سازی هر چیزی در هر زمان</span>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> ویژگی‌های نامحدود</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> محتوای چند زبانه</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> ویژگی‌های آزمایشی رایگان 30 روزه</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> پشتیبان‌گیری و بازیابی داده</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> به‌روزرسانی از طریق داشبورد و اسلک</li>
                                        <li><div className="icon"><i className="fa-solid fa-check"></i></div> همگام‌سازی با پایگاه داده ابری</li>
                                    </ul>
                                    <div className="pricing-button">
                                        <a href="page-pricing.html" className="theme-btn btn-style-one w-100">2500 تومان/ ماه</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Yearly" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="pricing-box-items">
                                    <div className="pricing-header">
                                        <div className="title-icon"><i className="flaticon-finance-Priicng-Plan"></i></div>
                                        <h3>طرح شخصی</h3>
                                        <span>سفارشی‌سازی هر چیزی در هر زمان</span>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> ویژگی‌های نامحدود</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> محتوای چند زبانه</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> ویژگی‌های آزمایشی رایگان 30 روزه</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> پشتیبان‌گیری و بازیابی داده</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> به‌روزرسانی از طریق داشبورد و اسلک</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> همگام‌سازی با پایگاه داده ابری</li>
                                    </ul>
                                    <div className="pricing-button">
                                        <a href="page-pricing.html" className="theme-btn btn-style-one w-100">2500 تومان/ سال</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="pricing-box-items active">
                                    <span className="gt-price-tag">پیشنهاد</span>
                                    <div className="pricing-header">
                                        <div className="title-icon"><i className="flaticon-finance-Priicng-Plan"></i></div>
                                        <h3>طرح ویژه</h3>
                                        <span>سفارشی‌سازی هر چیزی در هر زمان</span>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> ویژگی‌های نامحدود</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> محتوای چند زبانه</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> ویژگی‌های آزمایشی رایگان 30 روزه</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> پشتیبان‌گیری و بازیابی داده</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> به‌روزرسانی از طریق داشبورد و اسلک</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> همگام‌سازی با پایگاه داده ابری</li>
                                    </ul>
                                    <div className="pricing-button">
                                        <a href="page-pricing.html" className="theme-btn btn-style-one w-100">انتخاب طرح قیمت‌گذاری</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="pricing-box-items">
                                    <div className="pricing-header">
                                        <div className="title-icon"><i className="flaticon-finance-Priicng-Plan"></i></div>
                                        <h3>طرح استاندارد</h3>
                                        <span>سفارشی‌سازی هر چیزی در هر زمان</span>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> ویژگی‌های نامحدود</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> محتوای چند زبانه</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> ویژگی‌های آزمایشی رایگان 30 روزه</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> پشتیبان‌گیری و بازیابی داده</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> به‌روزرسانی از طریق داشبورد و اسلک</li>
                                        <li><div className="icon"><i className="lnr-icon-checkmark-circle"></i></div> همگام‌سازی با پایگاه داده ابری</li>
                                    </ul>
                                    <div className="pricing-button">
                                        <a href="page-pricing.html" className="theme-btn btn-style-one w-100">2500 تومان/ سال</a>
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