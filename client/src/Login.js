import React from "react"
// import '../../assets/css/bootstrap.min.css'
import 'assets/css/style.css'
export class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }


    }
    render() {
        return (
            <div class="account-page">
                <div class="main-wrapper">
                    <div class="account-content">
                        <div class="container">

                            <div class="account-box">
                                <div class="account-wrapper">
                                    <h3 class="account-title">Login</h3>
                                    <p class="account-subtitle">Access to our dashboard</p>

                                    <form action="home.html">
                                        <div class="form-group">
                                            <label>Email Address</label>
                                            <input
                                                class="form-control"
                                                type="email"
                                                placeholder="Enter email address"
                                            />
                                        </div>

                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col">
                                                    <label>Password</label>
                                                </div>
                                                <div class="col-auto">
                                                    <a href="https://google/com">
                                                        Forgot password?
                                                    </a>
                                                </div>
                                            </div>
                                            <input
                                                class="form-control"
                                                type="password"
                                                placeholder="Enter password"
                                            />
                                        </div>
                                        <div class="form-group text-center">
                                            <button class="btn btn-primary account-btn" type="submit">
                                                <div
                                                    class="spinner-border"
                                                    role="status"
                                                >
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}