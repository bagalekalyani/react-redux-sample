'use strict';

import React, {Component} from "react";
import {Button, Jumbotron} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

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

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

