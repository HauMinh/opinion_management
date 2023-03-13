import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function LayoutUser() {
    return (
        <>
            <Header/>
                <div style={{minHeight:600}}>
                    <Outlet/>
                </div>
            <Footer/>
        </>
    );
}

export default LayoutUser;