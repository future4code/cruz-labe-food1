import Home from 'pages/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
    
    </Switch>
    </BrowserRouter>
  )
}

export default Router