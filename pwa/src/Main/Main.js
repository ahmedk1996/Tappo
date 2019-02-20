import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CityMenu from './CityMenu/CityMenu';
import MealDetails from './ResterauntPanel/MealDetails';
import RSide from './RSide/RSide';
import Menu from './ResterauntPanel/Menu'


const Main = () => (
  <main>  
    <Switch>
      <Route exact path='/' component={CityMenu}/>
       <Route path='/RSide' component={RSide}/> 
       <Route path='/Menu' component={Menu} />
      {/* <Route exact path='/CityMenu' component={CityMenu}/> */}
      <Route path='/MenuItem' component={MealDetails}/>
    </Switch>
  </main>
)

export default Main;