import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './SideBar/SideBar';

function LayoutAdmin() {
    
    return (
        <>
            <Header/>
            <div id="layoutSidenav">
                <Footer/> 
                <Outlet/>
            </div>
            
        </>
    );
}

export default LayoutAdmin;