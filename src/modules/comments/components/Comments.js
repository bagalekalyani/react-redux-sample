'use strict';

import React, {Component} from "react";
import {Button, Jumbotron} from "react-bootstrap";

class Comments extends Component {

  render() {

    return (
      <Jumbotron>
        <h1>Add Your Comments here</h1>
        <p>Lets make a sample react-redux app with comments CRUD operations!!!.</p>
        <p><Button bsStyle="primary">Add new comments</Button></p>
      </Jumbotron>
    );

  }

}

export default Comments;

