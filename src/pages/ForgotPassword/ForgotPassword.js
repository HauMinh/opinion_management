import React from 'react';
import {Link} from "react-router-dom";

function ForgotPassword() {
    return (
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header">
                            <h3 className="text-center font-weight-light my-4">
                                Quên Mật Khẩu
                            </h3>
                        </div>
                        <div className="card-body">
                            <div className="small mb-3 text-muted">
                                Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu của bạn.
                            </div>
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
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                <Link className="small" to="/user/login">
                                Trở về trang đăng nhập
                                </Link>
                                <Link className="btn btn-primary" href="login.html">
                                 Lấy Mật Khẩu
                                </Link>
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

export default ForgotPassword;