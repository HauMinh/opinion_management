import React from 'react';
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useNavigate } from "react-router-dom";
import LayoutAdmin from '../Layout/Admin';
import UserService from '../../services/UserService';
import {useState,useEffect} from 'react';


function Login() {
    const {register, handleSubmit, formState: { errors }, reset} = useForm();
    const iconLoading = document.getElementById("loading");
    const navigate = useNavigate();
    const getLocal = localStorage.getItem("localUser");
    const  useradmin   = JSON.parse(getLocal);
    var emailadmin= "";
    var paswordadmin="";

    useradmin.map((data)=>{  
        emailadmin = data.email;
        paswordadmin = data.password;

    })

     
    const showLoading = () => {
        iconLoading.style.display = "flex";
    };

    const onHandleSubmitLogin = (data) =>{
        if(emailadmin === data.email && paswordadmin === data.password ){
            showLoading();
            setTimeout(() => {
                navigate("/admin/opinion", { replace: true });
              }, 1000);
        }else{
             alert("email hoặc mật khẩu chưa chính xác")
        //    Swal.fire('Any fool can use a computer')
        }
        
    }


    useEffect(()=>{ 
        getUserAdmin()

    },[]);

    const getUserAdmin = () =>{
        UserService.getUser()
        .then((res)=>{
            localStorage.setItem("localUser", JSON.stringify(res.data._embedded));
            
        })
        .catch( error=>{
            console.log(error)

        })

    }
    return (
        <>
            <div className="loading" id="loading" >
                <img src="https://thumbs.gfycat.com/HighCorruptIsabellineshrike-max-1mb.gif" alt="loading"/>
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
                            <form onSubmit={handleSubmit(onHandleSubmitLogin)}>
                                <div className="form-floating mb-3">
                                    <input
                                    className="form-control"
                                    id="inputEmail"
                                    type="email"
                                    placeholder="name@example.com"
                                    {...register("email", { required: true })}
                                    />
                                    <label htmlFor="inputEmail">Email</label>
                                    {errors.email && <span className="help-block text-danger">Vui lòng nhập email*</span>}
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                    className="form-control"
                                    id="inputPassword"
                                    type="password"
                                    placeholder="Password"
                                    {...register("password", { required: true })}
                                    />
                                    <label htmlFor="inputPassword">Mật khẩu</label>
                                    {errors.password && <span className="help-block text-danger">Vui lòng nhập mật khẩu*</span>}
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
                                    <Link className="small" to="/fpassword">
                                        Quên mật khẩu?
                                    </Link>
                                    <button type="submit" className="btn btn-primary">
                                        Đăng Nhập
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
        </>
    );
}


export default Login;
