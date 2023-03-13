import React from 'react';
import {useParams} from 'react-router-dom';
import {Link } from 'react-router-dom';
import Footer from '../../components/Layout/Admin/Footer/Footer';
import OpinionService from '../../services/OpinionService';
import {useState,useEffect} from 'react';

function OpinionDetail() {
    const [ opinion, setOpinion]= useState([]);
    const {id} = useParams();
    console.log("id", id)
   
    useEffect((id) =>{    
        getOpinion(id);
    }, [])
   

   const getOpinion = ()=>{
    console.log("id2", id)
        OpinionService.getOpinionById(id)
        .then((res) =>{
            setOpinion(res.data);
            console.log("databy ID",res.data)
            console.log("hoten",res.data.hoten)
        })
        .catch(error =>{
            console.log(error);
        })
    }
    console.log("opinionid", opinion)

    return (
        <div id="layoutSidenav_content">
        <main>
            <div className="container-fluid px-4">
                <h2 className="mt-4">Nội dung chi tiết ý kiến, góp ý.</h2>
                <ol className="breadcrumb mb-2">
                    <Link to="/admin/opinion" className="breadcrumb-item">
                        Danh sách ý kiến
                    </Link>
                    <li className="breadcrumb-item active">Nội dung Chi tiết </li>
                </ol>
                <div style={{textAlign:'justify'}}>
                    <table id="datatablesSimple" style={{width:380}}>
                        <tbody> 
                            <tr>
                                <th>Họ tên:</th>
                                <td>{opinion.hoten}</td>
                            </tr> 
                            <tr> 
                                <th>Địa chỉ:</th>   
                                <td>{opinion.diachi}</td>                          
                            </tr> 
                            <tr> 
                                <th>Email:</th>   
                                <td>{opinion.email}</td>                          
                            </tr> 
                            <tr> 
                                <th>Sdt:</th>   
                                <td>{opinion.sodienthoai}</td>                          
                            </tr>
                            <tr> 
                                <th>Tiêu đề:</th>   
                                <td>{opinion.tieude}</td>                          
                            </tr> 
                        </tbody>
                    </table> 
                    <div>
                        <p><b>Nội dung:</b></p>
                        <p>{opinion.noidung}</p>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </div>   
    );
}

export default OpinionDetail;