import React from 'react';
import TopBar from './Logo/TopBar.js';
import './Logo/Logo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    return(
    <div className="row" >
    <div > 


<li className="list-inline-item" > <div className="dropdown" color="#ebebeb" >
<button className="btn "  data-toggle="dropdown"><FontAwesomeIcon icon="bars" background-color="#ebebeb"  style={{marginTop:"15px",marginLeft:"10px"}} />
<span className="caret"></span></button>
<ul className="dropdown-menu" >
<li className="dropdown-header">Customer Options</li>
<li>Log In or Sign Up</li>
<li>Order History </li>
<li>Promotions</li>
</ul>
</div>
</li>  

    
    </div>

        <div className="col-2"  ><TopBar /></div>
    </div>
    );

}

export default Header;