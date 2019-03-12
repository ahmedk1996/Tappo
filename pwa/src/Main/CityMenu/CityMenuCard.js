import React from 'react';
import './CityMenuCard.scss';
import { Link } from 'react-router-dom'
import ReactSwipe from 'react-swipe';

const CityMenuCard = () => {
    return (
     
        <div>
           

<div className="carousel" passive="true">
            <ReactSwipe className="carousel" swipeOptions={{continuous: true }}>
        <div> <strong style={{color:"#111"}}>Special Offers:</strong> <img src={'/Images/promoted1.png'} alt="Special Offer" style={{width:"300px",marginLeft:"35px"}} />  </div>
        <div> <strong style={{color:"#111"}}>Special Offers:</strong> <img src={'/Images/promoted2.png'} alt="Special Offer" style={{width:"250px",marginLeft:"60px",marginTop:"30px"}} />  </div>
        <div> <strong style={{color:"#111"}}>Special Offers:</strong> <img src={'/Images/promoted3.png'} alt="Special Offer" style={{width:"300px",marginLeft:"30px",marginTop:"10px"}} />  </div>
    </ReactSwipe>
    <img src="/Images/double.png" width='30px' alt="Drink"  style={{marginLeft:"170px"}} />
    </div>
   <Link to='/Menu' >
            <div className="card-box"  >
            <div className="row">
            <h1  className="card-title" style={{fontSize:"15px", left: "auto", marginLeft: "200px"}} > Tim Hortons</h1> 

            </div>
            <div className="row"  >
              <div className="col-2">
                 <img src="/Images/tim-logo1.png" alt="example "width='90px'  style={{position: "relative",bottom: "30px"}} />
                 <h1 className="card-title" style={{width:"105px", position: "relative",bottom: "55px",left: "180px", fontSize:"10px"}}>Coffee and Breakfast </h1> 
                 <img src="/Images/5-star.png" alt="Stars" width='60px'  style={{fontSize:"10px", position: "relative",bottom: "65px",left: "195px"}} />
                 <h1 className="card-title"style={{width:"95px", fontSize:"10px", position: "relative",bottom: "80px"}}>Distance: 1 km</h1> 
                 


                 </div>
                </div>
              
                </div>
                </Link>
                <Link to='/MenuTappo' >
            <div className="card-box"  >
            <div className="row">
            <h1  className="card-title" style={{fontSize:"15px", left: "auto", marginLeft: "150px"}} >Tappo Demo Restaurant</h1> 

            </div>
            <div className="row"  >
              <div className="col-2">
                 <img src="/Images/logo.png" alt="example "width='80px'  style={{position: "relative",bottom: "30px"}} />
                 <h1 className="card-title" style={{width:"105px", position: "relative",bottom: "55px",left: "170px", fontSize:"10px"}}> USE FOR DEMO </h1> 
                 <img src="/Images/5-star.png" alt="Stars" width='60px'  style={{fontSize:"10px", position: "relative",bottom: "65px",left: "177px"}} />
                 <h1 className="card-title"style={{width:"95px", fontSize:"10px", position: "relative",bottom: "80px",marginLeft:"7px"}}>Distance: 1 km</h1> 
                 


                 </div>
                </div>
              
                </div>
                </Link>
          
        </div>

    )
};
export default CityMenuCard;
