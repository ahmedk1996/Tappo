import React, { Component } from 'react';
import './App.scss';
import './Header/Logo/Logo.scss';
import Main from './Main/Main.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faBell, faLanguage, faUser, faEllipsisV, faPlus,faCaretDown,faPlusSquare,faBars,faArrowsAltH} from '@fortawesome/free-solid-svg-icons'
import Header from './Header/Header';


library.add([faStroopwafel, faBell, faLanguage, faUser, faEllipsisV, faPlus,faCaretDown,faPlusSquare,faBars,faArrowsAltH])

export default class App extends Component {
  
 
  render() {
    return (


      <div className="wrapper">

        <div className="top">
          <div className="container" >
          
            <Header />
           
          </div>
         
        </div>
   
       
          
        <Main />

      </div>




    );
  }
}
