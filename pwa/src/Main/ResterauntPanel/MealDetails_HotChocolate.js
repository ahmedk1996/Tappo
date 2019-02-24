import React from 'react';
import "./MenuItems.scss";
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';


export default class MealDetails_OriginalBlend extends React.Component {
    state = {
        products: [],
        menu1:{
          name:'Hot Chocolate',
          tableN: 'Table Number',
          personName:'First and Last Name'
    
      }
      }
      componentDidMount(){
        this.getProducts();
      }
      getProducts = _ =>{
        fetch('http://localhost:4000/menu')
        .then(response => response.json())
        .then(response => this.setState({ products: response.data}))
        .catch(err => console.error(err))
      }

      openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
    
      addProduct = _ => {
        const{menu1} = this.state;
        fetch(`http://localhost:4000/menu/add?item_name=${menu1.name}&tableN=${menu1.tableN}&personName=${menu1.personName}`)
      .then(this.getProducts)
      .catch(err => console.error(err))
    }
      renderProduct = ({menu_id, item_name,tableN,personN})=> <div key={menu_id}>Item Ordered: {item_name},  table Number: {tableN}{personN}</div>

    render() {
        const{menu1}= this.state;

        return (
          <div>
          <div className="row" style={{paddingLeft:"14px"}} >

          <div >
          <Link to='/Menu'> <img src="/Images/back.png" alt="example33k "width='40px' align='center' style={{paddingTop:"34.5px",paddingLeft:"10px"}}/></Link>
          </div>

          <div className="col" >
          <h2 style={{ color: '#dc0f2d' , paddingTop: "30px",paddingBottom:"30px"}}> <strong> Tim Hortons </strong> </h2>
          </div>

        

          </div>
            <div className="row">
               


             
           
           
                <div className="menu-item" data-toggle="modal" data-target="#exampleModal" >
                 <img src="/Images/hot-chocolate.png" alt="example_image"  width='70px' align='center' style={{marginBottom:"0.2em",marginLeft:"2.5em"}} />
                    <h3  className="card-title" style={{fontSize:"1em",marginLeft:"1.5em", marginTop:"1em"}} >Hot Chocolate</h3>
                   
                    <h4  className="price" style={{fontSize:"1em",marginLeft:"3em", marginTop:"1.5em"}} >$2.99</h4>
                </div>
                <div>
                {/* <input value={menu1.name} onChange={e => this.setState({menu1: { ...menu1, name: e.target.value}})}/> */}
                <input value={menu1.tableN}onChange={e => this.setState({menu1: { ...menu1, tableN: e.target.value}})} style={{borderWidth:"0.3em", margin:"2em", marginBottom:"0.50em", flex:1}}/>
                <input value={menu1.personName}onChange={e => this.setState({menu1: { ...menu1, personName: e.target.value}})} style={{borderWidth:"0.3em", margin:"2em", marginTop:"0.50em"}}/>
                {/* <button onClick={this.addProduct}>Add Order</button> */}
<input type="button" value="Add Order" onClick={() => {this.addProduct();this.openModal()}} style={{margin:"2em", marginTop:"0.30em"}} />
            <Modal visible={this.state.visible} width="500" height="150" effect="fadeInUp" onClickAway={() => this.closeModal()}>  
            <div style={{color:"black"}}>
                        <h1>Order Sent</h1>
                        <p>Table Number: {menu1.tableN}</p>
                        <p>Customer Name: {menu1.personName}</p>
                        <p  onClick={() => this.closeModal()} style={{position:"relative" , left:"300px", bottom:"120px", color:"black",width:"240px"}}>Close</p>
                    </div>
                </Modal> 
            </div>
          
              
       
            
               
            </div>
            

            </div>
        )
    }
}