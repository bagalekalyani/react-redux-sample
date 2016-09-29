'use strict';

import React, {Component} from "react";
import {Jumbotron} from "react-bootstrap";


class Home extends Component {

  render() {

    return (
      <div>
        <div>
          <Jumbotron>
            <h1>Welcome to React Redux Sample App!</h1>
            <p>This is a simple skeleton for a react app using redux, bable, gulp.</p>
          </Jumbotron>
        </div>
      </div>
    );

  }

}

export default Home;
