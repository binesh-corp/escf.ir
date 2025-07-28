export default function CtaContactSection(){
    return (
        <section className="cta-contact-section fix">
            <div className="auto-container" dir="ltr">
                <div className="cta-contact-wrapper bg-cover" style={{backgroundImage: 'url("/images/cta-bg.jpg")'}}>
                    <div className="left-shape float-bob-x">
                        <img src="/images/left-shape.png" alt="img"/>
                    </div>
                    <h3 className="font-size-32 text-white font-weight-600 wow fadeInUp" data-wow-delay=".3s">No strategy for the Long-Term</h3>
                    <a href="page-contact.html" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay=".5s">Lets Talk With Us</a>
                </div>
            </div>
        </section>

    );
}