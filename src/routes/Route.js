import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LayoutUser from '../components/Layout/User';
import LayoutAdmin from '../components/Layout/Admin';
import OpinionList from '../pages/Opinion/OpinionList';
import OpinionDetail from '../pages/Opinion/OpinionDetail';
import Login from '../components/Login/Login';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import CreateOpinion from '../pages/Opinion/CreateOpinion';

function PublicRoutes() {
    return (
        <BrowserRouter>
         <Routes>
           <Route path="/" element={<LayoutUser/>}>
           <Route index element={<CreateOpinion/>}/>
           <Route path="/user/login" element={<Login/>}/>
           <Route path="/login/fpassword" element={<ForgotPassword/>}/>



           {/* <Route path="/" element={<LayoutAdmin/>}>  
                <Route index element={<OpinionList/>}/>
                <Route path="/admin/opinion" element={<OpinionList/>}/>
                <Route path="/admin/detail" element={<OpinionDetail/>}/>
             */}


               {/* <Route index  element={<Home/>}/>
               <Route path="/products" element={<ProductsIndex/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/contact" element={<Contact/>}/>
               <Route exact path="/products/:id"  element={<ProductDetail/>}/>
               <Route path="/cart" element={<Cart/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/register" element={<Register/>}/> */}
           </Route>    
         </Routes>
     </BrowserRouter>
    );
}

export default PublicRoutes;