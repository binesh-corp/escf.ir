export default function FaqSection(){
    return (
        <section className="faq-section fix section-padding section-bg bg-cover" style={{backgroundImage: "url(&#39;/images/faq-shape.jpg&#39;)"}}>
            <div className="auto-container" >
                <div className="row g-4 justify-content-between align-items-center">
                    <div className="col-xl-5 col-lg-6">
                        <div className="faq-left-items-1">
                            <div className="sec-title mb-0">
                                <h6 className="sub-title wow fadeInUp">
                                    <span className="triangle triangle1"></span>
                                    <span className="triangle triangle2"></span>
                                    سوالات پر تکرار
                                </h6>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">سوالات پر تکرار</h2>
                            </div>
                            <div className="faq-image">
                                <img src="/images/faq-image.jpg" alt="img" className="wow img-custom-anim-left"/>
                                <div className="shape-1 float-bob-y">
                                    <img src="/images/shape-01.png" alt="img"/>
                                </div>
                                <div className="shape-2 float-bob-x">
                                    <img src="/images/shape-02.png" alt="img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-content-1">
                            <ul className="accordion-box">

                                <li className="accordion block active-block wow fadeInUp">
                                    <div className="acc-btn">
                                        آیا برای اشخاص حقیقی هم تامین مالی میکنید ؟
                                        <div className="icon fa fa-plus"></div>
                                    </div>
                                    <div className="acc-content current">
                                        <div className="content">
                                            <div className="text">هر بنگاه اقتصادی که مجوز فعالیت داشته باشه و مودی مالیاتی باشه، میتونه از خدمات ما استفاده کنه. حالا چه در قالب شخصیت حقیقی یا حقوقی.</div>
                                        </div>
                                    </div>
                                </li>

                                <li className="accordion block wow fadeInUp" data-wow-delay=".2s">
                                    <div className="acc-btn active">
                                        چه اسنادی برای همه رویه های تامین مالی مورد نیاز ه؟
                                        <div className="icon fa fa-plus"></div>
                                    </div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">فاینانسرهای مختلف، مستندات متفاوتی رو نیاز دارند، با اینحال میشه گفت صورت مالی و تراز آزمایشی و اظهارنامه مالیاتی، مستنداتی هستند که در عموم مدل های تامین مالی بکار گرفته میشن.</div>
                                        </div>
                                    </div>
                                </li>

                                <li className="accordion block wow fadeInUp" data-wow-delay=".4s">
                                    <div className="acc-btn">
                                        کمترین و بیشترین منابعی که میتونین تامین کنین چقدره ؟
                                        <div className="icon fa fa-plus"></div>
                                    </div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">این موضوع، بسیار به فعالیت ها، درآمدها، مستندات، و دارایی های متقاضی وابسته است ولی ما بصورت کلی میتونیم از 500 میلیون تومان تا 500 میلیارد تومان براتون منابع مالی تامین کنیم.</div>
                                        </div>
                                    </div>
                                </li>

                                <li className="accordion block wow fadeInUp" data-wow-delay=".6s">
                                    <div className="acc-btn">
                                        ابزارهای تسهیلاتی و تعهداتی یعنی چی؟
                                        <div className="icon fa fa-plus"></div>
                                    </div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">این اصطلاحات، در اصل منابع نقدی و ابزارهای اعتباری ه که در بانک ها با این نام ها شناخته میشن. به عبارت دیگه انواع وام ها که به طریقی منابع نقدی رو به دست متقاضی میرسونن، با نام تسهیلات شناخته می شن. و اسناد اعتباری که امکان معاملات بر مبنای انتقال اعتبار رو برای طرفین مهیا میکنن، با نام ابزارهای تعهدی می شناسن.</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="accordion block wow fadeInUp" data-wow-delay=".8s">
                                    <div className="acc-btn">
                                        چه منابعی رو میتونید برای من تامین کنید ؟
                                        <div className="icon fa fa-plus"></div>
                                    </div>
                                    <div className="acc-content">
                                        <div className="content">
                                            <div className="text">این سوال به عوامل متعددی وابسته است. با ما تماس بگیرید تا طی یه گفتگوی دوستانه، بتونیم بسته پیشنهادی مون رو تقدیمتون کنیم</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}