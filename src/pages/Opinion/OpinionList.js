import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link } from 'react-router-dom';
import { toast } from "react-toastify";
import Footer from '../../components/Layout/Admin/Footer/Footer';
import OpinionService from '../../services/OpinionService';
import {useState,useEffect} from 'react';


function OpinionList() {
    const [opinions, setOpinions]= useState([]);
   
    useEffect(() =>{    
        getAllOpinions();
   
    }, [])
   

   const getAllOpinions = ()=>{
        OpinionService.getOpinion()
        .then((res) =>{
            setOpinions(res.data._embedded);
            console.log("data1",res.data._embedded)
        })
        .catch(error =>{
            console.log(error);
        })
       
    }
   
    const deleteOpinion = (opinionId)=>{
        console.log("id",opinionId);
        OpinionService.deleteOpinion(opinionId)
        .then((response)=>{
            console.log(response.data)
            getAllOpinions();
        })
        .catch(error =>{
            console.log(error.response.data);
        })
        toast.error("Xóa thành công!", {
            position: "bottom-left",
        });
    }
    

    return (  
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <h2 className="mt-4">Danh sách tổng hợp các ý kiến, góp ý.</h2>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item">
                          Dashboard
                        </li>
                        <li className="breadcrumb-item active">Danh sách ý kiến</li>
                    </ol>
                    
                    <div className="card mb-4">
                        <div className="card-header">
                        <i className="fas fa-table me-1" />
                        Bảng dữ liệu
                        </div>
                        <div className="card-body">
                        <table id="datatablesSimple">
                            <thead>
                            <tr>
                                {/* <th>Id</th> */}
                                <th>Họ tên</th>
                                <th>Địa chỉ</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Tiêu đề</th>
                                <th>Thời gian</th>
                                <th>Thao tác</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    opinions.map(
                                        opinion =>
                                        <tr key={opinion._id.$oid}>
                                            {/* <td>{opinion._id.$oid}</td> */}
                                            <td>{opinion.hoten}</td>
                                            <td>{opinion.diachi}</td>
                                            <td>{opinion.email}</td>
                                            <td>{opinion.sodienthoai}</td>
                                            <td>{opinion.tieude}</td>
                                            <td>{opinion.ngaygui}</td>
                                            <td>
                                                <tr>
                                                    <td><button className="btn btn-danger"  onClick = {() =>{if(window.confirm('Bạn chắc chắn muốn xóa?')) {deleteOpinion(opinion._id.$oid)};}}>xóa</button></td>
                                                    {/* <td><Link to="/opinion/detail">xem chi tiết</Link></td> */}
                                                    <td><Link to={`/opinion/${opinion._id.$oid}`} className="btn btn-primary ms-2">xem chi tiết</Link></td>
                                                </tr>
                                            </td>             
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>           
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>    
    );
}

export default OpinionList;