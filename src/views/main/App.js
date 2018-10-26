import React, { Component } from 'react';
import { connect } from 'react-redux';

import Filter from '../../components/Filter/Filter';
import List from '../../components/List/List';
import Form from '../../components/Form/Form';
import { itemFetchDataPosts } from '../../actions/main';

import './App.css';


class App extends Component {
  async componentDidMount(){
    await this.props.getAllPost();
  }
  render() {
    return (
      <div className="App">
        <h2>Postulación para: </h2>
        <img className="AppLogo" src="https://www.tcit.cl/img/logo.png"/>
        <Filter />
        <List />
        <Form />
        <div className="AppSign">Creado por <b>Roddy Vitali Astorga</b> - 2018</div>
      </div>
    );
  }
}
const mapStateToProps = ( state, props ) => ({
})
const mapDispatchToProps = dispatch => ({
  getAllPost: payload => dispatch(itemFetchDataPosts(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);