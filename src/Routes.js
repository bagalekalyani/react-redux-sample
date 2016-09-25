let React = require('react');
let {Router, Route, IndexRoute} = require('react-router');

import {App} from "./modules/common/containers";
import Comments from "./modules/comments/components/Comments";
import Home from "./modules/common/components/Home";
import PageNotFoundError from "./modules/common/components/PageNotFoundError";

var Routes = (

  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Comments}/>

      <Route path="home" component={Home}>

      </Route>

      <Route path="*" component={PageNotFoundError}/>

    </Route>
  </Router>

);

export default Routes;
