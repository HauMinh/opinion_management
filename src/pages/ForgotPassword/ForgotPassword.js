import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import {Link} from "react-router-dom";
import {useRef} from 'react';

function ForgotPassword() {
     const {register, handleSubmit, formState: { errors }, reset} = useForm();
    const form= useRef();

    const onHandleSubmit= (data) =>{
        sendEmail();
        reset();
        alert("kiểm tra email của bạn")
    }
    const sendEmail = (e) => {
        emailjs.sendForm('service_96o4czu', 'template_5sy6j1l', form.current, 'hWVX1x-I2RoIb_UOQ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
        });
    };

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
                            <form 
                              ref={form}
                              onSubmit={handleSubmit(onHandleSubmit)}
                            >
                            <div className="form-floating mb-3">
                                <input
                                name="user_email"
                                className="form-control"
                                id="inputEmail"
                                type="email"
                                placeholder="name@example.com"
                                 {...register("email", { required: true })}
                                />
                                <label htmlFor="inputEmail">Email</label>
                                {errors.email && <span className="help-block text-danger">Vui lòng nhập email*</span>}
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                <Link className="small" to="/login">
                                Trở về trang đăng nhập
                                </Link>
                                <button type='submit' value="Send"  className="btn btn-primary" href="login.html">
                                 Lấy Mật Khẩu
                                </button>
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