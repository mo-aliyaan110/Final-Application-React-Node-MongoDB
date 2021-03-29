import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <div>
            <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Edumato</Link>
                    </div>
                    <ul class="nav navbar-nav">
                    {/* <li class="active"><Link to="/">Home</Link></li> */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Booking</Link></li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Header
