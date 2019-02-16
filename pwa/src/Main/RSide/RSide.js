import React, { Component } from 'react';
import { Link } from 'react-router-dom';




export default class App extends Component {
  state = {
    products: [],
    menu1:{
      name:'Order Required',
      tableN: 20,
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

      <div className = "App">
      <p1>Orders Processed Below:</p1>
      <div >          {products.map(this.renderProduct)}
</div>

      </div>




    );
  }
}
