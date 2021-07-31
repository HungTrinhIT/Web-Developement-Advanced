import React from 'react'

const Register = () => {
    return (
        <div>
            <nav id="menu" className="fake_menu" />
            <div id="preloader">
                <div data-loader="circle-side" />
            </div>
            {/* End Preload */}
            <div id="login">
                <aside>
                    <figure>
                        <a href="index.html"><img src="img/logo.png" width={149} height={42} alt /></a>
                    </figure>
                    <form autoComplete="off">
                        <div className="form-group">
                            <span className="input">
                                <input className="input_field" type="text" />
                                <label className="input_label">
                                    <span className="input__label-content">Your Name</span>
                                </label>
                            </span>
                            <span className="input">
                                <input className="input_field" type="text" />
                                <label className="input_label">
                                    <span className="input__label-content">Your Last Name</span>
                                </label>
                            </span>
                            <span className="input">
                                <input className="input_field" type="email" />
                                <label className="input_label">
                                    <span className="input__label-content">Your Email</span>
                                </label>
                            </span>
                            <span className="input">
                                <input className="input_field" type="password" id="password1" />
                                <label className="input_label">
                                    <span className="input__label-content">Your password</span>
                                </label>
                            </span>
                            <span className="input">
                                <input className="input_field" type="password" id="password2" />
                                <label className="input_label">
                                    <span className="input__label-content">Confirm password</span>
                                </label>
                            </span>
                            <div id="pass-info" className="clearfix" />
                        </div>
                        <a href="#0" className="btn_1 rounded full-width add_top_30">Register to Udema</a>
                        <div className="text-center add_top_10">Already have an acccount? <strong><a href="login.html">Sign In</a></strong></div>
                    </form>
                    <div className="copy">© 2017 Udema</div>
                </aside>
            </div>
        </div>

    );
};
export default Register;