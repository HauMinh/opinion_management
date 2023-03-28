import React from 'react';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LayoutUser from '../components/Layout/User';
import LayoutAdmin from '../components/Layout/Admin';
import OpinionList from '../pages/Opinion/OpinionList';
import OpinionDetail from '../pages/Opinion/OpinionDetail';
import NotFound from '../pages/NotFound/NotFound';
import Login from '../components/Login/Login';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import CreateOpinion from '../pages/Opinion/CreateOpinion';


function PublicRoutes() {
    return (
        <BrowserRouter>
        <ToastContainer/>
         <Routes>
           <Route  element={<LayoutUser/>}>
                <Route path="/" element={<CreateOpinion/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/fpassword" element={<ForgotPassword/>}/>  
           </Route>
           <Route  element={<LayoutAdmin/>}>  
                <Route  path="/admin/opinion" element={<OpinionList/>}/>
                <Route path="/opinion/detail" element={<OpinionDetail/>}/>
                <Route exact path="/opinion/:id"  element={<OpinionDetail/>}/>              
           </Route>
           <Route path="*" element={<NotFound/>}/>    
         </Routes>
     </BrowserRouter>
    );
}

export default PublicRoutes;