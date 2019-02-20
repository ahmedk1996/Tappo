import React from 'react';
import { Link } from 'react-router-dom';


class ButtonSection extends React.Component { 
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
      }
      toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }

    render () {
return(

        <div className="row" style={{paddingLeft:"14px"}} >

            <div >
            <Link to='/Menu'> <img src="/Images/back.png" alt="example33 "width='40px' align='center' style={{paddingTop:"30px"}}/></Link>
            </div>

            <div className="col" >
            <h2 style={{ color: '#dc0f2d' , paddingTop: "30px",paddingBottom:"30px"}}> <strong> Tim Hortons </strong> </h2>
            </div>

          

            </div>
            
   

   

);





}

}
export default ButtonSection;

