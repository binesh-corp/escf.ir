
export default function Page() {
    return (
        <div>
            <main  className="mt-100 mb-100 default-transition" style={{backgroundImage:"url(/images/city.webp)",backgroundSize:"cover",opacity: 1}}>
                <div className="container">
                    <div className="row h-100 w-100">
                        <div className="d-none d-lg-flex col-md-5 col-lg-6 col-xl-7">
                            <div className="login-image-side" ></div>
                        </div>
                        <div className="col-12 col-7 col-lg-6 col-xl-5  my-auto">
                            <form className="mt-100 mb-100">
                                <div className="card">
                                    <div className="d-flex d-lg-none login-image-logo">
                                    </div>
                                    <div className="card-body">

                                        <h2>ورود به پنل کارگزار</h2>
                                        <h4 style={{color: "darkred"}}></h4>


                                        <div className="mb-3 field-losloginform-national_code required">
                                            <label className="form-label" htmlFor="losloginform-national_code" >کد
                                                ملی</label>
                                            <input type="text" id="losloginform-national_code" className="form-control" autoComplete="false"/>
                                            <div className="form-text text-muted">کد ملی کاربر</div>
                                            <div className="invalid-feedback"></div>
                                        </div>
                                        <div className="mb-3 field-losloginform-mobile required">
                                            <label className="form-label" htmlFor="losloginform-mobile">شماره
                                                همراه</label>
                                            <input type="text" id="losloginform-mobile" className="form-control"
                                                   />
                                            <div className="form-text text-muted">شماره همراه</div>
                                            <div className="invalid-feedback"></div>
                                        </div>
                                        <div className="mb-3 field-losloginform-mobile required">
                                            <label className="form-label" htmlFor="losloginform-mobile">کد پرسنلی</label>
                                            <input type="text" id="losloginform-mobile" className="form-control"/>
                                            <div className="form-text text-muted">کد پرسنلی</div>
                                            <div className="invalid-feedback"></div>
                                        </div>

                                        <div className="mb-3 field-losloginform-password required">
                                            <label className="form-label" htmlFor="losloginform-password">رمز
                                                ورود</label>
                                            <input type="password" id="losloginform-password" className="form-control"
                                                    />
                                            <div className="form-text text-muted">رمز ورود پیامک شده</div>
                                            <div className="invalid-feedback"></div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-lg-12">
                                                <button type="submit"
                                                        className="btn btn-success btn-block text-center btn-boarded"
                                                        name="login-button">ورود
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}