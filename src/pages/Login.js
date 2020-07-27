import React from 'react' ;
import '@fortawesome/fontawesome' ;
import '@fortawesome/fontawesome-free-solid' ;
import reactLogo from '../logo.svg'

function Login() {
    return (
        <div className="columns is-vcentered">
            <div className="login column is-4 ">
                <section className="section">
                    <div className="has-text-centered">
                        <img className="login-logo" src={ reactLogo }/>
                    </div>

                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control has-icons-right">
                            <input className="input" type="text"/>
                            <span className="icon is-small is-right">
                                <i className="fa fa-user"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-right">
                            <input className="input" type="password"/>
                            <span className="icon is-small is-right">
                                <i className="fa fa-key"></i>
                            </span>
                        </div>
                    </div>

                    <div className="has-text-centered">
                        <a className="button is-vcentered is-primary is-outlined">Login</a>
                    </div>
                    <div className="has-text-centered">
                        <a href="signup.html"> Don't you have an account? Sign up now!</a>
                    </div>
                </section>

            </div>
            <div id="particles-js" className="interactive-bg column is-8"></div>
        </div>
    )
};

export default Login;