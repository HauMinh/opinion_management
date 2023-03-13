import React from 'react';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import moment from 'moment';
import {useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import OpinionService from '../../services/OpinionService';

function CreateOpinion() {
    const {register, handleSubmit, formState: { errors }, reset} = useForm();
    



    const onHandleSubmit = (data) =>{
        console.log("form data",data);
        OpinionService.createOpinion(data)
        .then((response)=>{
            console.log(response.data)
           
        })
        .catch(error =>{
            console.log(error.response.data);
        })
        // console.log("date",data.date);
        toast.success("Gửi ý kiến, góp ý thành công!", {
          position: "bottom-left",
        });
        reset();
    }

    return (
    <>
        <div className="py-1 ps-5 bg-gainsboro mt-auto">
            <h4 className="ms-5">Góp ý kiến</h4>
            <p  className="ms-5">Mọi ý kiến, góp ý giúp ABC ngày càng hoàn thiện hơn</p>
        </div>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="container-fluid pt-5 pb-5 mb-5">
                <div className="row px-xl-5 d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="mb-4">
                            <div className="row mt-3">
                                <div className="col-md-6 form-group mb-3">
                                    <label>Họ tên</label>
                                    <input className="form-control" type="text" placeholder="lê văn a" 
                                     {...register("hoten", { required: true })}
                                    />
                                    {errors.hoten && <span className="help-block text-danger">Vui lòng nhập họ tên*</span>}
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>E-mail</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="example@email.com"
                                    {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className="help-block text-danger">Vui lòng nhập email*</span>}
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>Địa chỉ</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="12 Nguyễn Tri Phương, Đà Nẵng"
                                    {...register("diachi", { required: true })}
                                    />
                                    {errors.diachi && <span className="help-block text-danger">Vui lòng nhập địa chỉ*</span>}
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>Số điện thoại</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="+84"
                                    {...register("sodienthoai", { required: true })}
                                    />
                                    {errors.sodienthoai && <span className="help-block text-danger">Vui lòng nhập số điện thoại*</span>}
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>Tiêu đề</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="ý kiến góp ý về vấn đề cơ sở vật chất công ty"
                                    {...register("tieude", { required: true })}
                                    />
                                    {errors.tieude && <span className="help-block text-danger">Vui lòng nhập tiêu đề*</span>}
                                </div>
                                <div className="col-md-6 form-group mb-3">
                                    <label>Ngày gửi</label>
                                    <input
                                        max={moment().format("DD-MM-YYYY")}
                                        className="form-control"
                                        type="date"
                                    {...register("ngaygui", { required: true })}
                                    />
                                    {errors.ngaygui && <span className="help-block text-danger">Vui lòng chọn ngày hiện tại*</span>}
                                </div>
                                <div className="col-md-12 form-group">
                                    <label>Nội dung</label>
                                    <textarea
                                        style={{minHeight:200}}
                                        className="form-control"
                                        type="text"
                                        placeholder="Nội dung "
                                    {...register("noidung", { required: true })}
                                    />
                                    {errors.noidung && <span className="help-block text-danger">Vui lòng nhập nội dung*</span>}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn-bg btn-block btn-send my-3 py-2">
                            <b>GỬI GÓP Ý</b>
                        </button>
                        <button type="button" onClick={() => reset()} className="btn-bg btn-block btn-reset my-3 py-2">
                            <b>LÀM MỚI</b>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </>
    );
}

export default CreateOpinion;