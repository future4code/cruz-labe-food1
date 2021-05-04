import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Home, Login, Signup, Cart, Profile, RestaurantsDetail} from 'pages'

const Router = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route exact path='/login' component={ Login } />
      <Route exact path='/sign-up' component={ Signup } />
      <Route exact path='/cart' component={ Cart } />
      <Route exact path='/profile' component={ Profile } />
      <Route exact path='/restaurants-details/:id' component={ RestaurantsDetail } />
    </Switch>
    </BrowserRouter>
  )
}

export default Router