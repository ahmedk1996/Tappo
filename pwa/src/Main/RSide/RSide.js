import React, { Component } from 'react';




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

  renderProduct = ({menu_id, item_name,tableN,personN})=> <div key={menu_id}>Item Ordered: {item_name},  table Number: {tableN}{personN}</div>
  render() {
    const{products}= this.state;
    return (

      <div className = "App">
      <p>Orders Processed Below:</p>
      <div >          {products.map(this.renderProduct)}
</div>

      </div>




    );
  }
}
