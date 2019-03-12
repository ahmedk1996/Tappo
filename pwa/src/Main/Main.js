import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CityMenu from './CityMenu/CityMenu';
import DarkRoast from './ResterauntPanel/MealDetails_DarkRoast';
import CafeLatte from './ResterauntPanel/MealDetails_CafeLatte';
import OriginalBlend from './ResterauntPanel/MealDetails_OriginalBlend';
import HotChocolate from './ResterauntPanel/MealDetails_HotChocolate';
import Apple from './ResterauntPanel/MealDetails_AppleJuice';
import MenuTappo from './ResterauntPanel/MenuTappo';
import Orange from './ResterauntPanel/MealDetails_OrangeJuice';
import Water from './ResterauntPanel/MealDetails_Water';

import Coffee from './ResterauntPanel/MealDetails_Coffee';



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
       <Route path='/MenuTappo' component={MenuTappo}/>
       <Route path='/MenuItem_OrangeJuice' component={Orange}/>
       <Route path='/MenuItem_AppleJuice' component={Apple}/>
       <Route path='/MenuItem_Water' component={Water}/>
       <Route path='/MenuItem_Coffee' component={Coffee}/>


    </Switch>
  </main>
)

export default Main;