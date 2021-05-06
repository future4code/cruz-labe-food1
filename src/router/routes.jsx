import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  Adress,
  Cart,
  Profile,
  RestaurantDetail,
  NotFound,
} from "pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/adress" component={Adress} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/restaurant/:id" component={RestaurantDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
