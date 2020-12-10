import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
       <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
                <div className="container">
                    <h1><Link to={'/'} className="text-light">Crud React Redux Rest Api & axios</Link></h1>

                    <Link
                    className="btn btn-danger nuevo-post d-block d-md-inline-block"
                    to={"/productos/nuevo"}>Agregar Producto &#43;</Link>
                </div>
        </nav>
       </Fragment>
     );
}
 
export default Header;