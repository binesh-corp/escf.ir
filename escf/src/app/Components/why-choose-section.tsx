export default function WhyChooseSection(){
    return (
        <section dir="ltr" className="why-choose-section fix section-bg" style={{backgroundImage: "url(&#39;images/home-1/choose-us/choose-us-shape.png&#39;)"}}>
            <div className="auto-container">
                <div className="why-choose-us-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-xl-5">
                            <div className="why-choose-us-image-1">
                                <img src="/images/choose-us.jpg" alt="img" className="wow img-custom-anim-left"/>
                                <div className="icon-box-items">
                                    <div className="icon">
                                        <i className="flaticon-business-006-target"></i>
                                    </div>
                                    <h3>رویه های متنوع تامین مالی را برای شما بکار گرفته ایم</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7" dir="rtl">
                            <div className="why-choose-us-content-1">
                                <div className="sec-title mb-0">
                                    <h6 className="sub-title">
                                        <span className="triangle triangle1"></span>
                                        <span className="triangle triangle2"></span>
                                        راهکارهای تامین مالی
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".2s">منابع مختلفی را برای تامین نیازهای مالی شما بکار گرفته ایم</h2>
                                </div>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a href="#Mission" data-bs-toggle="tab" className="nav-link active"> منابع بانکی </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#Vision" data-bs-toggle="tab" className="nav-link"> بازار سرمایه </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#Philosophy" data-bs-toggle="tab" className="nav-link"> منابع شرکتی </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#Acchievment" data-bs-toggle="tab" className="nav-link"> منابع نوین </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="Mission" className="tab-pane fade show active">
                                        <div className="why-choose-list wow fadeInUp" data-wow-delay=".3s">
                                            <h3>تامین مالی با ابزارهای بانکی</h3>
                                            <p>بانک ها همیشه بعنوان نهادهای اصلی تامین مالی بنگاه های صنعتی مطرح بوده اند و کماکان نیز با همین رویکرد ابزارها و رویه های مختلفی را برقرار نموده اند</p>
                                        </div>
                                        <div className="why-choose-list-items">
                                            <ul className="why-list wow fadeInUp" data-wow-delay=".5s">
                                                <li><span className="icon"><i className="fa-solid fa-check"></i></span> ارزانترین منابع</li>
                                                <li><span className="icon"><i className="fa-solid fa-check"></i></span> رویه های نقدی گوناگون</li>
                                                <li><span className="icon"><i className="fa-solid fa-check"></i></span> ابزارهای اعتباری قابل معامله</li>
                                            </ul>
                                            <div className="choose-us-progressbar wow fadeInUp" data-wow-delay=".5s">
                                                <div className="progress-container">
                                                    <div className="circular-progress" id="progress1">
                                                        <span className="progress-value" id="value1">23%</span>
                                                    </div>
                                                    <div className="text">متوسط نرخ سود</div>
                                                </div>
                                                <div className="progress-container">
                                                    <div className="circular-progress" id="progress2">
                                                        <span className="progress-value" id="value2">4%</span>
                                                    </div>
                                                    <div className="text">متوسط کارمزد خدمات</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Vision" className="tab-pane fade">
                                        <div className="why-choose-list">
                                            <h3>تامین مالی از بازار سرمایه</h3>
                                            <p>منابع نقدی قابل تامین از بازار سرمایه در سال های اخیر کمک های شایانی به تامین مالی سرمایه ثابت یا سرمایه در گردش بنگاه های صنعتی نموده اند.</p>
                                        </div>
                                        <div className="why-choose-list-items">
                                            <ul className="why-list">
                                                <li><span className="icon"><i className="fa-solid fa-check"></i></span> انعطاف در اعتبارسنجی</li>
                                                <li><span className="icon"><i className="fa-solid fa-check"></i></span> رویه های تماما نقدی</li>
                                                <li><span className="icon"><i className="fa-solid fa-check"></i></span> دوره بازپرداخت بلند مدت</li>
                                            </ul>
                                            <div className="choose-us-progressbar">
                                                <div className="progress-container">
                                                    <div className="circular-progress" id="progress3">
                                                        <span className="progress-value" id="value3">40%</span>
                                                    </div>
                                                    <div className="text">متوسط نرخ سود</div>
                                                </div>
                                                <div className="progress-container">
                                                    <div className="circular-progress" id="progress4">
                                                        <span className="progress-value" id="value4">5%</span>
                                                    </div>
                                                    <div className="text">متوسط کارمزد خدمات</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Philosophy" className="tab-pane fade">
                                        <div className="why-choose-list">
                                            <h3>تامین مالی از منابع شرکتی</h3>
                                            <p>شرکت های مختلفی با فعالیت در حوزه تامین مالی، منابع آزاد خود و سرمایه گذاران را مدیریت نموده و به متقاضیان تامین مالی می رسانند. </p>
                                        </div>
                                        <div className="why-choose-list-items">
                                            <ul className="why-list">
                                                <li><span className="icon"><i className="fa-solid fa-check"></i></span> سرعت بالاتر</li>
                                                <li><span className="icon"><i className="fa-solid fa-check"></i></span> انعطاف در رویه ها</li>
                                                <li><span className="icon"><i className="fa-solid fa-check"></i></span> رویکردهای متنوع</li>
                                            </ul>
                                            <div className="choose-us-progressbar">
                                                <div className="progress-container">
                                                    <div className="circular-progress" id="progress5">
                                                        <span className="progress-value" id="value5">45%</span>
                                                    </div>
                                                    <div className="text">متوسط نرخ سود</div>
                                                </div>
                                                <div className="progress-container">
                                                    <div className="circular-progress" id="progress6">
                                                        <span className="progress-value" id="value6">8%</span>
                                                    </div>
                                                    <div className="text">متوسط کارمزد خدمات</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Acchievment" className="tab-pane fade">
                                        <div className="why-choose-list">
                                            <h3>منابع نوین</h3>
                                            <p>ابزارها و رویه های متنوعی از طریق نهادهای بالادستی معرفی گردیده اند که توسط فاینانسرهای مختلف به دست متقاضیان می رسند</p>
                                        </div>
                                        <div className="why-choose-list-items">
                                            <ul className="why-list">
                                                <li><span className="icon"><i className="fa-solid fa-check"></i></span> ابزارهای تسهیل شده</li>
                                                <li><span className="icon"><i className="fa-solid fa-check"></i></span> تطابق با نیازهای صنعت</li>
                                                <li><span className="icon"><i className="fa-solid fa-check"></i></span> مطابق مدل های جهانی</li>
                                            </ul>
                                            <div className="choose-us-progressbar">
                                                <div className="progress-container">
                                                    <div className="circular-progress" id="progress7">
                                                        <span className="progress-value" id="value7">30%</span>
                                                    </div>
                                                    <div className="text">متوسط نرخ سود</div>
                                                </div>
                                                <div className="progress-container">
                                                    <div className="circular-progress" id="progress8">
                                                        <span className="progress-value" id="value8">10%</span>
                                                    </div>
                                                    <div className="text">متوسط کارمزد خدمات</div>
                                                </div>
                                            </div>
                                        </div>
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