import React from 'react';
import {Link } from 'react-router-dom';
import Footer from '../../components/Layout/Admin/Footer/Footer';


function OpinionList() {
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
                                <th>Id</th>
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
                            <tr>        
                                <td>01</td>
                                <td>Trịnh Minh Hậu</td>
                                <td>Quảng Nam</td>
                                <td>hau@gmail.com</td>
                                <td>0389955268</td>
                                <td>Cơ sở vật chất</td>
                                <td>10/03/2023</td>
                                <td>
                                <tr>
                                    <td><button>xóa</button></td>
                                    <td><Link to="/admin/detail">xem chi tiết</Link></td>
                                </tr>
                                </td>   
                            </tr>
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