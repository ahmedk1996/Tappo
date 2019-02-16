import React from 'react';
import './CityMenuCard.scss';
import { Link } from 'react-router-dom'
import ReactSwipe from 'react-swipe';

const CityMenuCard = () => {
    return (
     
        <div>
           

<div className="carousel" passive="true">
            <ReactSwipe className="carousel" swipeOptions={{continuous: true }}>
        <div> <strong style={{color:"#111"}}>Special Offers:</strong> <img src={'/Images/promoted1.png'}  style={{width:"300px",marginLeft:"35px"}} />  </div>
        <div> <strong style={{color:"#111"}}>Special Offers:</strong> <img src={'/Images/promoted2.png'} style={{width:"250px",marginLeft:"60px",marginTop:"30px"}} />  </div>
        <div> <strong style={{color:"#111"}}>Special Offers:</strong> <img src={'/Images/promoted3.png'} style={{width:"300px",marginLeft:"30px",marginTop:"10px"}} />  </div>
    </ReactSwipe>
    <img src="/Images/double.png" width='30px'  style={{marginLeft:"170px"}} />
    </div>
   <Link to='/ResterauntPanel/MenuPanel' >
            <div className="card-box"  >
            <div className="row">
            <h1  className="card-title" style={{fontSize:"15px", left: "auto", marginLeft: "200px"}} > Tim Hortons</h1> 

            </div>
            <div className="row"  >
              <div className="col-2">
                 <img src="/Images/tim-logo1.png" width='90px'  style={{position: "relative",bottom: "30px"}} />
                 <h1 className="card-title"style={{ position: "relative",bottom: "55px",left: "200px", fontSize:"10px"}}>Coffee and Breakfast</h1> 
                 <img src="/Images/5-star.png" width='60px'  style={{fontSize:"10px", position: "relative",bottom: "70px",left: "180px"}} />
                 <h1 className="card-title"style={{fontSize:"10px", position: "relative",bottom: "100px"}}>Distance: 1 km</h1> 
                 


                 </div>
                </div>
              
                </div>
                </Link>
          
        </div>

    )
};
export default CityMenuCard;
