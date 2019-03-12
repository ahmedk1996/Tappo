import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


export default class Menu extends React.Component {
    render() {
        

        return (
            <div className="row" >
            <Link to='/'> <img src="/Images/back.png" alt="example_image"  width='60px' align='center' style={{paddingLeft:"30px", paddingTop:"30px"}}/></Link>
          <p style={{marginTop:"80px"}}>Drinks</p>
              <Container>
                <Row>

                <Link to='/MenuItem_Water'>  <Col xxxs={{ order: 1}}><div className="menu-item" data-toggle="modal" data-target="#exampleModal" style={{width:"150px",height:"200px"}} >
                 <img src="/Images/water.png" alt="example_image"  width='30px' align='center' style={{marginBottom:"0.2em",marginLeft:"2.5em"}} />
                    <h3  className="card-title" style={{fontSize:"0.7em",marginLeft:"3.5em", marginTop:"1em"}} >Water</h3></div></Col></Link>
                    <Link to='/MenuItem_Coffee'>  <Col xxxs={{ order: 1}}><div className="menu-item" data-toggle="modal" data-target="#exampleModal" style={{width:"150px",height:"200px"}} >
                 <img src="/Images/coffee.png" alt="example_image"  width='50px' align='center' style={{marginBottom:"0.2em",marginLeft:"2em"}} />
                    <h3  className="card-title" style={{fontSize:"0.7em",marginLeft:"3.5em", marginTop:"1em"}} >Coffee</h3></div></Col></Link>
                <Link to='/MenuItem_OrangeJuice'>  <Col s={{ order: 3 }}><div className="menu-item" data-toggle="modal" data-target="#exampleModal" style={{width:"150px",height:"200px"}} >
                 <img src="/Images/orange.png" alt="example_image"  width='60px' align='center' style={{marginBottom:"0.2em",marginLeft:"1.5em"}} />
                    <h3  className="card-title" style={{fontSize:"0.7em",marginLeft:"1.6em", marginTop:"1em"}} >Orange Juice</h3></div></Col></Link>
                    <Link to='/MenuItem_AppleJuice'>  <Col s={{ order: 3 }}><div className="menu-item" data-toggle="modal" data-target="#exampleModal" style={{width:"150px",height:"200px"}} >
                 <img src="/Images/apple.png" alt="example_image"  width='30px' align='center' style={{marginBottom:"0.2em",marginLeft:"2.5em"}} />
                    <h3  className="card-title" style={{fontSize:"0.7em",marginLeft:"2.6em", marginTop:"1em"}} >Apple Juice</h3></div></Col></Link>
                    </Row>
                    </Container>
     
         
        </div>
        );
    }

}