'use client'
import {Part2} from "@/app/components/Part2";

export default function Home() {
  return (
    <div>
      <section dir="ltr" className="hero-section hero-1">
        <div className="hero-image wow img-custom-anim-right">
          <img src="/images/hero-01.png" alt="img"/>
          <div className="shape-2">
            <img src="/images/shape-2.png" alt="img"/>
          </div>
        </div>
        <div className="shape-1 float-bob-x">
          <img src="/images/shape-1.png" alt="img"/>
        </div>
        <div className="shape-3">
          <img src="/images/shape-3.png" alt="img"/>
        </div>
        <div className="auto-container">
          <div className="row g-4">
            <div className="col-xl-6 col-lg-12">
              <div className="hero-content" dir="rtl">
                <h6 className="wow fadeInUp">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M15 12.5H23.75L10 27.5L13.75 16.25H6.25L16.25 2.5L15 12.5Z" fill="white"></path>
                    </svg>
                  </span>
                  راهکارهای متنوع و مطمئن تامین مالی
                </h6>
                <h1 className="wow fadeInUp" data-wow-delay=".2s">تأمین مالی هوشمند، رشد پایدار کسب‌وکارها</h1>
                <p className="wow fadeInUp" data-wow-delay=".4s">در دنیای امروز، پایداری زنجیره تأمین بدون تأمین مالی دقیق و به‌موقع ممکن نیست؛ ما این امکان را برای شما فراهم می‌کنیم.</p>
                <div className="hero-button wow fadeInUp" data-wow-delay=".6s">
                  <a href="page-contact.html" className="theme-btn btn-style-one">
                    با ما در ارتباط باشید
                    <span className="icon">
                      <i className="flaticon-finance-fi_3385625"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>


      <section className="business-solution-section">
        <div className="container pt-0 pb-0">
          <div className="row g-0">
            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".2s">
              <div className="feature-left-content-1">
                <div className="down-shape">
                  <img src="/images/dawn-2.png" alt="img"/>
                </div>
                <div className="spiral-shape">
                  <img src="/images/spiral.png" alt="img"/>
                </div>
                <h2 className="text-anim">از ابتدا تا انتها در کنار شماییم</h2>
                <div className="client-image">
                  <img src="/images/client-1.png" alt="img"/>
                  <img src="/images/client-2.png" alt="img" className="icon-2"/>
                  <img src="/images/client-3.png" alt="img" className="icon-3"/>
                  <img src="/images/client-4.png" alt="img" className="icon-4"/>
                </div>
                <h4>خدمات جامع</h4>
                <div className="star">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="row g-4">
                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                  <div className="feature-business-solution-items-1">
                    <div className="business-image">
                      <img src="/images/business-image-1.jpg" alt="img"/>
                      <img src="/images/business-image-1.jpg" alt="img"/>
                    </div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-business-028-briefcase"></i>
                      </div>
                      <h3>مشاوره</h3>
                      <p>شناخت نیازها و تدوین نقشه راه تامین مالی</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                  <div className="feature-business-solution-items-2">
                    <div className="content">
                      <h3>کارگزاری</h3>
                      <p>پیگیری تمامی امور به نمایندگی از شما</p>
                      <div className="icon"><i className="flaticon-finance-business-expense-svgrepo-com-1"></i></div>
                    </div>
                    <div className="business-image">
                      <img src="/images/business-image-2.jpg" alt="img"/>
                      <img src="/images/business-image-2.jpg" alt="img"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="about-section section-padding">
        <div className="star-shape bounce-y">
          <img src="/images/star-shape.png" alt="img"/>
        </div>
        <div className="arrow-shape-1 bounce-x">
          <img src="/images/arrow-1.png" alt="img"/>
        </div>
        <div className="arrow-shape-2 bounce-y">
          <img src="/images/arrow-2.png" alt="img"/>
        </div>
        <div className="auto-container">
          <div className="row g-4 align-items-center">
            <div className="col-xl-6">
              <div className="about-image-1 wow img-custom-anim-left">
                <img src="/images/about-image.png" alt="img"/>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-content-1">
                <div className="sec-title mb-0">
                  <h6 className="sub-title wow fadeInUp">
                    <span className="triangle triangle1"></span>
                    <span className="triangle triangle2"></span>
                    ما کی هستیم
                  </h6>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">افزایش سرمایه شما به صورت سیستماتیک</h2>
                </div>
                <div className="icon-items wow fadeInUp" data-wow-delay=".4s">
                  <div className="icon">
                    <i className="lnr-icon-briefcase"></i>
                  </div>
                  <p>هر کسی با پاداش بالا و مفید برای معاملات، خرید و سرمایه‌گذاری خود</p>
                </div>
                <p className="about-text wow fadeInUp" data-wow-delay=".6s">هر کسی با پاداش بالا و مفید برای معاملات، خرید و سرمایه‌گذاری خود. هدف ما این است که</p>
                <div className="about-list-items">
                  <ul className="about-list wow fadeInUp" data-wow-delay=".8s">
                    <li><span className="icon"> <i className="fa-solid fa-check"></i> </span> محافظت از شرکت شما</li>
                    <li><span className="icon"> <i className="fa-solid fa-check"></i> </span> ما راهکارهایی به شما ارائه می‌دهیم</li>
                    <li><span className="icon"> <i className="fa-solid fa-check"></i> </span> ما از شما مراقبت می‌کنیم</li>
                    <li><span className="icon"> <i className="fa-solid fa-check"></i> </span> هر کسی با پاداش بالا</li>
                  </ul>
                  <div className="counter-box bg-cover wow fadeInUp" data-wow-delay=".8s">
                    <div className="butterfly-shape"><img src="/images/butterfly.png" alt="img"/></div>
                    <div className="count-box"><h2><span className="count-text" data-speed="3000" data-stop="25">0</span> +</h2></div>
                    <div className="counter-bottom">
                      <p>سال تجربه</p>
                      <div className="icon"><i className="flaticon-business-006-target"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="counter-section section-padding pt-0">
        <div className="auto-container">
          <div className="counter-wrapper">
            <div className="counter-box-1 wow bounceInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <div className="count-box">
                <h2><span className="count-text" data-speed="3000" data-stop="1">0</span>M</h2>
                <p>رشد کسب‌وکار جهانی</p>
              </div>
            </div>
            <div className="counter-box-1 wow bounceInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="count-box">
                <h2><span className="count-text" data-speed="3000" data-stop="12">0</span>K+</h2>
                <p>مشتریان راضی</p>
              </div>
            </div>
            <div className="counter-box-1 wow bounceInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="count-box">
                <h2><span className="count-text" data-speed="3000" data-stop="119">0</span>M</h2>
                <p>کشورهای تحت پوشش</p>
              </div>
            </div>
            <div className="counter-box-1 wow bounceInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="count-box">
                <h2>
                  <span className="count-text" data-speed="3000" data-stop="33">0</span>
                </h2>
                <p>مسابقات برنده جایزه</p>
              </div>
            </div>
          </div>
        </div>
      </section>


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
                <h2 className="wow fadeInUp" data-wow-delay=".3s">شما ترجیح می‌دهید کنترل کامل <br/>مسائل کسب‌وکار را داشته باشید</h2>
              </div>
              <div className="col-xl-5 col-lg-3 wow fadeInUp" data-wow-delay=".4s">
                <div style={{float:"left"}}  dir="ltr" className="array-button justify-content-end">
                  <button className="array-prev"><i className="fa-regular fa-arrow-left"></i></button>
                  <button className="array-next"><i className="fa-regular fa-arrow-right"></i></button>
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


      <div className="marquee-section fix section-padding pt-0">
        <div className="marquee">
          <div className="marquee-group">
            <div className="text">مشاوره</div>
            <div className="text">
              <img src="/images/dawn.png" alt="img"/>
            </div>
            <div className="text">کسب‌وکار</div>
            <div className="text">
              <img src="/images/dawn.png" alt="img"/>
            </div>
            <div className="text">مشاوره</div>
            <div className="text">
              <img src="/images/dawn.png" alt="img"/>
            </div>
            <div className="text">مالی</div>
            <div className="text">
              <img src="/images/dawn.png" alt="img"/>
            </div>
            <div className="text">حسابداری</div>
            <div className="text">
              <img src="/images/dawn.png" alt="img"/>
            </div>
          </div>
          <div className="marquee-group">
            <div className="text">مشاوره</div>
            <div className="text">
              <img src="/images/dawn.png" alt="img"/>
            </div>
            <div className="text">کسب‌وکار</div>
            <div className="text">
              <img src="/images/dawn.png" alt="img"/>
            </div>
            <div className="text">مشاوره</div>
            <div className="text">
              <img src="/images/dawn.png" alt="img"/>
            </div>
            <div className="text">مالی</div>
            <div className="text">
              <img src="/images/dawn.png" alt="img"/>
            </div>
            <div className="text">حسابداری</div>
          </div>
        </div>
      </div>



    <Part2/>

    </div>
  );
}
