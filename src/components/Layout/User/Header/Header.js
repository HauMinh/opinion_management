import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <>
        {/* Header User Start */}
          <header className="sb-topnav navbar navbar-expand navbar-dark bg-grd p-5 ">
            {/* Navbar Brand*/}
            <Link className="navbar-brand ps-3" to='/'>
              {/* <img  src="/assets/imgs/anh.png" className="logo" alt='logo'/>  */}
              Hộp Thư Trực Tuyến
              <h3>CÔNG TY TNHH ABC</h3>
            </Link>
            <span className="ms-auto"></span>
            {/* Navbar*/}
           <Link to="/login" className=' text-white'>
              <i className="fas fa-user fa-fw text-white" /> Đăng Nhập
           </Link>
             
          </header>
        {/* Header User End */}
      </>      
    );
}

export default Header;
