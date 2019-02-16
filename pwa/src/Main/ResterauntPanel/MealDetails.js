import React from 'react';
import { Link } from 'react-router-dom';
import "./MenuItems.scss";

export default class MealDetails extends React.Component {
    state = {
        products: [],
        menu1:{
          name:'Dark Roast',
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
    
      addProduct = _ => {
        const{menu1} = this.state;
        fetch(`http://localhost:4000/menu/add?item_name=${menu1.name}&tableN=${menu1.tableN}&personName=${menu1.personName}`)
      .then(this.getProducts)
      .catch(err => console.error(err))
    }
      renderProduct = ({menu_id, item_name,tableN,personN})=> <div key={menu_id}>Item Ordered: {item_name},  table Number: {tableN}{personN}</div>

    render() {
        const{menu1,products}= this.state;

        return (
            <div className="row">
               


             
           <Link to='/ResterauntPanel/MenuPanel' >
           
                <div className="menu-item" data-toggle="modal" data-target="#exampleModal" >
                 <img src="/Images/dark-roast-mi.png" width='70px' align='center' style={{marginBottom:"0.2em",marginLeft:"2.5em"}} />
                    <h3  className="card-title" style={{fontSize:"1em",marginLeft:"1em", marginTop:"1em"}} >Dark Roast Coffee</h3>
                    <h3 style={{color:'grey',fontSize:"1em"}}  className="card-text"></h3>
                </div>
                <div>
                {/* <input value={menu1.name} onChange={e => this.setState({menu1: { ...menu1, name: e.target.value}})}/> */}
                <input value={menu1.tableN}onChange={e => this.setState({menu1: { ...menu1, tableN: e.target.value}})}/>
                <input value={menu1.personName}onChange={e => this.setState({menu1: { ...menu1, personName: e.target.value}})}/>
<button onClick={this.addProduct}>Add Order</button>
            </div>
     
              
                </Link>
            
               

            

            </div>
        )
    }
}