import React from 'react';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";


function CreateOpinion() {
    return (
    <>
        <div className="py-1 ps-5 bg-gainsboro mt-auto">
            <h4 className="ms-5">Góp ý kiến</h4>
            <p  className="ms-5">Mọi ý kiến, góp ý giúp ABC ngày càng hoàn thiện hơn</p>
        </div>
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
                                <label htmlFor="inputEmail">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                className="form-control"
                                id="inputPassword"
                                type="password"
                                placeholder="Password"
                                />
                                <label htmlFor="inputPassword">Password</label>
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
                                Remember Password
                                </label>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                
                                <a className="btn btn-primary" href="index.html">
                                Login
                                </a>
                            </div>
                            </form>
                        </div>
                        <div className="card-footer text-center py-3">
                            <div className="small">
                            <a href="register.html">Need an account? Sign up!</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </main>
            </div>
        </div>

        {/* <form onSubmit={handleSubmit(onHandleSubmitOrder)}> */}
        <form>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div className="mb-4">
                            <h4 className=" card-header bg-secondary border-0 font-weight-semi-bold mb-4">Shipping Address</h4>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>Full Name</label>
                                    <input className="form-control" type="text" placeholder="John" 
                                    //  {...register("fullname", { required: true })}
                                    />
                                    {/* {errors.fullname && <span className="help-block text-danger">Please enter full name*</span>} */}
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>E-mail</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="example@email.com"
                                    // {...register("email", { required: true })}
                                    />
                                    {/* {errors.email && <span className="help-block text-danger">Please enter email*</span>} */}
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Phone Number</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="+84"
                                    // {...register("phonenumber", { required: true })}
                                    />
                                    {/* {errors.phonenumber && <span className="help-block text-danger">Please enter phone number*</span>} */}
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Address </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="123 Street"
                                    // {...register("address", { required: true })}
                                    />
                                    {/* {errors.address && <span className="help-block text-danger">Please enter address*</span>} */}
                                </div>
                            </div>
                            <h4 className="card-header bg-secondary border-0 font-weight-semi-bold mb-4">Payment</h4>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                        type="radio"
                                        className="custom-control-input"
                                        name="payment"
                                        value="Paypal"
                                        id="paypal"
                                        // {...register('payment', { required: true })}
                                        />
                                        <label className="custom-control-label" htmlFor="paypal">
                                            Paypal
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                        type="radio"
                                        className="custom-control-input"
                                        name="payment"
                                        value="MoMo"
                                        id="momo"
                                        // {...register('payment', { required: true })}
                                        />
                                        <label className="custom-control-label" htmlFor="momo">
                                            MoMo
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                        type="radio"
                                        className="custom-control-input"
                                        name="payment"
                                        value="Direct Check"
                                        id="directcheck"
                                        // {...register('payment', { required: true })}
                                        />
                                        <label className="custom-control-label" htmlFor="directcheck">
                                            Direct Check
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                        type="radio"
                                        className="custom-control-input"
                                        name="payment"
                                        value="Bank Transfer"
                                        id="banktransfer"
                                        // {...register('payment', { required: true })}
                                        />
                                        <label className="custom-control-label" htmlFor="banktransfer">
                                            Bank Transfer
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* {errors.payment && <span className="help-block text-danger">Please choose a payment method*</span>} */}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-secondary mb-5">
                        <div className="card-header bg-secondary border-0">
                            <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between mb-3 pt-1">
                            <h6 className="font-weight-medium">Subtotal:</h6>
                            {/* <h6 className="font-weight-medium">$ {total}</h6> */}
                            </div>
                            <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Shipping:</h6>
                            <h6 className="font-weight-medium">$10</h6>
                            </div>
                        </div>
                        <div className="card-footer border-secondary bg-transparent">
                            <div className="d-flex justify-content-between mt-2">
                            <h5 className="font-weight-bold">Total:</h5>
                            {/* <h5 className="font-weight-bold">$ {totalShiping}</h5> */}
                            </div>
                            <button type="submit" className="btn btn-block btn-primary my-3 py-3">
                                <b>PLACE ORDER</b>
                            </button>
                            {/* <Link to="/products" className="btn btn-block btn-primary my-3 py-3">
                                <b>KEEP SHOPPING</b>
                            </Link> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>
    );
}

export default CreateOpinion;