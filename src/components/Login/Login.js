import React from 'react';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header">
                            <h3 className="text-center font-weight-light my-4">Đăng Nhập</h3>
                        </div>
                        <div className="card-body">
                            <form>
                            <div className="form-floating mb-3">
                                <input
                                className="form-control"
                                id="inputEmail"
                                type="email"
                                placeholder="name@example.com"
                                />
                                <label htmlFor="inputEmail">Email</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                className="form-control"
                                id="inputPassword"
                                type="password"
                                placeholder="Password"
                                />
                                <label htmlFor="inputPassword">Mật khẩu</label>
                            </div>
                            <div className="form-check mb-3">
                                <input
                                className="form-check-input"
                                id="inputRememberPassword"
                                type="checkbox"
                                defaultValue=""
                                />
                                <label
                                className="form-check-label"
                                htmlFor="inputRememberPassword"
                                >
                                Ghi nhớ mật khẩu
                                </label>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                <Link className="small" to="/login/fpassword">
                                    Quên mật khẩu?
                                </Link>
                                <a className="btn btn-primary" href="index.html">
                                    Đăng Nhập
                                </a>
                            </div>
                            </form>
                        </div>
                        <div className="card-footer text-center py-3">
                           
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </main>
            </div>
        </div>
    );
}


export default Login;
