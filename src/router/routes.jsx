import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {
  Home,
  Login,
  Signup,
  Address,
  Cart,
  Profile,
  RestaurantDetail,
  NotFound,
} from 'pages'
import Layout from 'components/Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/address' component={Address} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/restaurant/:id' component={RestaurantDetail} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
