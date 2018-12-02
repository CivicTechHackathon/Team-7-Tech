import React, { Component } from "react";
import "./grayscale.css";

export default class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    

    }

    submit = () => {
        this.props.history.push('/district');
    }

    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container d-flex h-100 align-items-center">
                        <div className=" mx-auto text-center">
                           
                            <form class="animated zoomIn delay-1s rounded border border-light bgcolor p-5">
                                <h2 className="text-dark bold text-uppercase">Sewage Surfers</h2>
                                <p class="h4 mb-4 text-center">Sign in</p>

                                <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" />

                                <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" />

                                <div class="d-flex justify-content-between">
                                    <div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember" />
                                            <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="javascript:void(0)" className="small">Forgot password?</a>
                                    </div>
                                </div>

                                <button class="btn btn-info btn-block my-4" type="submit" onClick={this.submit}>Sign in</button>

                                <div class="text-center">
                                    <p>Not a member?
                                    <a href="">Register</a>
                                    </p>

                                </div>
                            </form>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

