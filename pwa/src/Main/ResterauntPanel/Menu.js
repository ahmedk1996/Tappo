import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


export default class Menu extends React.Component {
    render() {
        

        return (
            <div className="row" >
            <Link to='/'> <img src="/Images/back.png" alt="example_image"  width='60px' align='center' style={{paddingLeft:"30px", paddingTop:"30px"}}/></Link>
              <Container style={{marginTop:"100px"}}>
                <Row>
                <Link to='/MenuItem'>  <Col xxxs={{ order: 1}}>1</Col></Link>
                    <Col s={{ order: 2 }}>2</Col>
                    <Col s={{ order: 3 }}>3</Col>
                    </Row>
                    </Container>
        </div>
        );
    }

}