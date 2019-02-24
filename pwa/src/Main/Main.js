import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CityMenu from './CityMenu/CityMenu';
import DarkRoast from './ResterauntPanel/MealDetails_DarkRoast';
import CafeLatte from './ResterauntPanel/MealDetails_CafeLatte';
import OriginalBlend from './ResterauntPanel/MealDetails_OriginalBlend';
import HotChocolate from './ResterauntPanel/MealDetails_HotChocolate';


import RSide from './RSide/RSide';
import Menu from './ResterauntPanel/Menu'


const Main = () => (
  <main>  
    <Switch>
       <Route exact path='/' component={CityMenu}/>
       <Route path='/RSide' component={RSide}/> 
       <Route path='/Menu' component={Menu} />
       <Route path='/MenuItem_DarkRoast' component={DarkRoast}/>
       <Route path='/MenuItem_CafeLatte' component={CafeLatte}/>
       <Route path='/MenuItem_OriginalBlend' component={OriginalBlend}/>
       <Route path='/MenuItem_HotChocolate' component={HotChocolate}/>


    </Switch>
  </main>
)

export default Main;