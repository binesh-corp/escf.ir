'use client'


import BusinessSolutionSection from "@/app/Components/business-solution-section";
import AboutSection from "@/app/Components/about-section";
import CounterSection from "@/app/Components/counter-section";
import ServiceSection from "@/app/Components/service-section";
import ProjectSection from "@/app/Components/project-section";
import MarqueeSection from "@/app/Components/marquee-section";
import WhyChooseSection from "@/app/Components/why-choose-section";
import PricingSection from "@/app/Components/pricing-section";
import TeamSection from "@/app/Components/team-section";
import {ContactSection} from "@/app/Components/contact-section";
import TestimonialSection from "@/app/Components/testimonial-section";
import FaqSection from "@/app/Components/faq-section";
import CtaContactSection from "@/app/Components/cta-contact-section";
import NewsSecton from "@/app/Components/news-secton";

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
                                <h1 className="wow fadeInUp" data-wow-delay=".2s">تأمین مالی هوشمند، رشد پایدار
                                    کسب‌وکارها</h1>
                                <p className="wow fadeInUp" data-wow-delay=".4s">در دنیای امروز، پایداری زنجیره تأمین
                                    بدون تأمین مالی دقیق و به‌موقع ممکن نیست؛ ما این امکان را برای شما فراهم
                                    می‌کنیم.</p>
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

            <WhyChooseSection/>

            <BusinessSolutionSection/>


            {/*<AboutSection/>*/}


            {/*<CounterSection/>*/}

            <ServiceSection/>

            {/*<ProjectSection/>*/}

            <MarqueeSection/>


            {/*<PricingSection/>*/}

            {/*<TeamSection/>*/}

            <ContactSection/>

            {/*<TestimonialSection/>*/}

            <FaqSection/>

            {/*<CtaContactSection/>*/}

            {/*<NewsSecton/>*/}

        </div>
    );
}
