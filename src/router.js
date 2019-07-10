import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/login/IndexPage';
import Home from './view/home'
import routes from './router/index'
import RouteView from './router/router'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* {RouteView(routes)} */}
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={Home} />
         {/* <Redirect to="/login" /> */}
      </Switch>
    </Router>
  )
}

export default RouterConfig;
