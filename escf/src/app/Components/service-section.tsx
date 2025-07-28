export default function ServiceSection(){
    return (
        <section className="service-section section-padding fix bg-cover" style={{backgroundImage: "url(&#39;/images/service-bg.jpg&#39;)"}}>
            <span className="ellipse-bg"></span>
            <div className="auto-container">
                <div className="sec-title">
                    <div className="row g-4 justify-content-between align-items-center">
                        <div className="col-xl-7 col-lg-7">
                            <h6 className="text-white sub-title wow fadeInUp">
                                <span className="triangle triangle1"></span>
                                <span className="triangle triangle2"></span>
                                برترین مدل های تامین مالی
                            </h6>
                            <h2 className="text-white wow fadeInUp" data-wow-delay=".2s">با برخی مدل های تامین مالی زنجیره تولید بیشتر آشنا شوید</h2>
                        </div>
                        <div className="col-xl-3 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section-counter-content">
                                <h3 className="count-box"><span className="count-text" data-speed="3000" data-stop="11">+</span>+</h3>
                                <h6 className="text-white font-size-16 line-height-1 font-weight-400">مدل تامین مالی</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-wrapper">
                <div className="row">
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="service-card-items">
                            <div className="icon"><i className="flaticon-finance-business-expense-svgrepo-com-1"></i></div>
                            <div className="content">
                                <h3><a href="page-service-details.html">برات الکترونیک</a></h3>
                                <p>سندی دیجیتال و قابل انتقال که خریدار تعهد می‌کنه مبلغی رو در تاریخ مشخص به فروشنده پرداخت کنه. همه‌چیز آنلاین، سریع، شفاف و بدون کاغذبازی انجام می‌شه.</p>
                                <a href="page-service-details.html" className="link-btn"><i className="lnr-icon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="service-card-items">
                            <div className="icon"><i className=" lnr-icon-layers"></i></div>
                            <div className="content">
                                <h3><a href="page-service-details.html">فاکتورینگ</a></h3>
                                <p>یعنی دریافت زودتر پول فاکتور از طریق یک نهاد مالی. شما بعنوان تامین کننده منتظر پرداخت خریدار نمی‌مونید، نقدینگی‌تون زودتر تأمین می‌شه.</p>
                                <a href="page-service-details.html" className="link-btn"><i className="lnr-icon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="service-card-items">
                            <div className="icon"><i className="flaticon-business-023-lifesaver"></i></div>
                            <div className="content">
                                <h3><a href="page-service-details.html">فاکتورینگ معکوس</a></h3>
                                <p>شما بعنوان خریدار کمک می‌کنید تأمین‌کننده زودتر پولش رو بگیره، بدون اینکه خودتون زودتر پرداخت کنید. بانک فاکتور رو سریع به تأمین‌کننده تسویه میکنه و بعداً از شما می‌گیره.</p>
                                <a href="page-service-details.html" className="link-btn"><i className="lnr-icon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="service-card-items">
                            <div className="icon"><i className="lnr-icon-folder-open"></i></div>
                            <div className="content">
                                <h3><a href="page-service-details.html">تامین مالی قراردادی</a></h3>
                                <p>یه کسب‌وکار با استفاده از قراردادهای رسمی، پول لازم برای فعالیت‌هاش رو زودتر دریافت می‌کنه. قراردادها برای طرفین تضمین می‌کنن که پول در زمان مشخص به‌دست میاد.</p>
                                <a href="page-service-details.html" className="link-btn"><i className="lnr-icon-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}