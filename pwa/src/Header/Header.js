import React from 'react';
import TopBar from './Logo/TopBar.js';
import './Logo/Logo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    navBar: {'top': AppBar.height}
  }

export default class Header extends React.Component {    
    constructor() {
        super();
        this.state = {open: false};
      }
    
      handleToggle = () => this.setState({open: !this.state.open});
    render(){

        
    return(
    <div className="row" >
     <MuiThemeProvider>
        <div>
          <AppBar style={{backgroundColor:"rgb(222, 222, 222)",height:"50px",boxShadow:"" }}
      
           
            iconElementLeft={<FontAwesomeIcon onClick={this.handleToggle} icon="bars" background-color="#ebebeb"  style={{marginTop:"15px",marginLeft:"10px"}} />}
          />
          <Drawer
            open={this.state.open}
            width={200}
            containerStyle={styles.navBar}>
            <MenuItem>Application Setting 1</MenuItem>
            <MenuItem>Application Setting 2</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    <div > 



    
    </div>

        <div className="col-2"  ><TopBar /></div>
    </div>
    );

}
}
