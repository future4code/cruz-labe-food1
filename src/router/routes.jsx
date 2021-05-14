import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from 'components/Layout'
import Error from 'components/Error'
import {
  Home,
  Login,
  Signup,
  Address,
  Cart,
  Profile,
  RestaurantDetail,
  EditInfo,
  EditAddress,
  NotFound,
} from 'pages'

const Router = () => (
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
        <Route exact path='/editinfo' component={EditInfo} />
        <Route exact path='/editaddress' component={EditAddress} />
        <Route exact path='/error' component={Error} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default Router
