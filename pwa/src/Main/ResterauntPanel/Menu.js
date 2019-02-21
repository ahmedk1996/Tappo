import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


export default class Menu extends React.Component {
    render() {
        

        return (
            <div className="row" >
            <Link to='/'> <img src="/Images/back.png" alt="example_image"  width='60px' align='center' style={{paddingLeft:"30px", paddingTop:"30px"}}/></Link>
              <Container style={{marginTop:"50px",marginLeft:"00px"}}>
                <Row>

                <Link to='/MenuItem_DarkRoast'>  <Col xxxs={{ order: 1}}><div className="menu-item" data-toggle="modal" data-target="#exampleModal" style={{width:"150px",height:"200px"}} >
                 <img src="/Images/dark-roast-mi.png" alt="example_image"  width='30px' align='center' style={{marginBottom:"0.2em",marginLeft:"2.5em"}} />
                    <h3  className="card-title" style={{fontSize:"0.7em",marginLeft:"2em", marginTop:"1em"}} >Dark Roast</h3></div></Col></Link>

                <Link to='/MenuItem_OriginalBlend'>  <Col s={{ order: 2 }}><div className="menu-item" data-toggle="modal" data-target="#exampleModal" style={{width:"150px",height:"200px"}} >
                 <img src="/Images/originalBlend.png" alt="example_image"  width='30px' align='center' style={{marginBottom:"0.2em",marginLeft:"2.5em"}} />
                    <h3  className="card-title" style={{fontSize:"0.7em",marginLeft:"2em", marginTop:"1em"}} >Original Blend</h3></div></Col></Link>
                <Link to='/MenuItem_HotChocolate'>  <Col s={{ order: 3 }}><div className="menu-item" data-toggle="modal" data-target="#exampleModal" style={{width:"150px",height:"200px"}} >
                 <img src="/Images/hot-chocolate.png" alt="example_image"  width='30px' align='center' style={{marginBottom:"0.2em",marginLeft:"2.5em"}} />
                    <h3  className="card-title" style={{fontSize:"0.7em",marginLeft:"2em", marginTop:"1em"}} >Hot Chocolate</h3></div></Col></Link>
                    </Row>
                    </Container>
        </div>
        );
    }

}