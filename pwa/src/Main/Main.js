import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ResterauntPanel from './ResterauntPanel/MenuPanel';
import CityMenu from './CityMenu/CityMenu';
import MealDetails from './ResterauntPanel/MealDetails';
import RSide from './RSide/RSide';



const Main = () => (
  <main>  
    <Switch>
      <Route exact path='/' component={CityMenu}/>
       <Route path='/RSide' component={RSide}/> 
      <Route exact path='/CityMenu' component={CityMenu}/>
      <Route path='/ResterauntPanel' component={ResterauntPanel}/>
      <Route path='/ResterauntPanel/MealDetails' component={MealDetails}/>
    </Switch>
  </main>
)

export default Main;