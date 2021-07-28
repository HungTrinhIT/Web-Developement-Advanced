import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
                    <form>
                        <div className="access_social">
                            <a href="#0" className="social_bt facebook">Login with Facebook</a>
                            <a href="#0" className="social_bt google">Login with Google</a>
                            <a href="#0" className="social_bt linkedin">Login with Linkedin</a>
                        </div>
                        <div className="divider"><span>Or</span></div>
                        <div className="form-group">
                            <span className="input">
                                <input className="input_field" type="email" autoComplete="off" name="email" />
                                <label className="input_label">
                                    <span className="input__label-content">Your email</span>
                                </label>
                            </span>
                            <span className="input">
                                <input className="input_field" type="password" autoComplete="new-password" name="password" />
                                <label className="input_label">
                                    <span className="input__label-content">Your password</span>
                                </label>
                            </span>
                            <small><a href="#0">Forgot password?</a></small>
                        </div>
                        <a href="#0" className="btn_1 rounded full-width add_top_60">Login to Udema</a>
                        <div className="text-center add_top_10">New to Udema? <strong><a href="register.html">Sign up!</a></strong></div>
                    </form>
                    <div className="copy">© 2017 Udema</div>
                </aside>
            </div>
        </div>


    );
}
export default Login;