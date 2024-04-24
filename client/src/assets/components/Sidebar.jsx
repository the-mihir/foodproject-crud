import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="d-flex flex-column min-vh-100 worp-bg px-4">

        <div className="my-5">
                <Link to='/' className="text-decoration-none my-4">
                <i className="bi bi-bootstrap fs-5 me-2"></i> <span className="fs-4 text-color">CRUD PROJECT</span>
            </Link>
        </div>


            <ul className="nav nav-pills flex-column">
                <li className='nav-item my-2 py-1'>
                    <span className="nav-Link text-decoration-none text-color">
                        <i className="bi bi-menu-app ms-2"></i> <span className="text-color">Menu</span>
                    </span>
                </li>
                <li className='nav-item my-2 py-1'>
                    <Link to='/additem' className="nav-Link text-decoration-none text-color">
                        <i className="bi bi-cart2 ms-2"></i> <span className="text-color">Create Food</span>
                    </Link>
                </li>
                <li className='nav-item my-1 py-2 bg-purple'>
                    <Link to='/' className="nav-Link text-decoration-none text-color">
                        <i className="bi bi-files ms-2"></i> <span className="text-color">All Foods</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;