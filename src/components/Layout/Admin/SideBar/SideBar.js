import React from 'react';
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <>                 
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav" style={{height:620}}>
                    <NavLink className="nav-link" to="/admin/opinion">
                        <div className="sb-nav-link-icon">
                        <i className="fas fa-table" />
                        </div>
                        Danh sách ý kiến
                    </NavLink>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Design by:</div>
                    Trinh Minh Hau
                </div>
                </nav>
            </div>
        </>
    );
}

export default Footer;