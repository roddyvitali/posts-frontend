import React, { Component } from 'react';
import { connect } from 'react-redux';

import { itemFetchInsertPost } from '../../actions/main';

import './Form.css';

class Form extends Component {
  state = {
    name: '',
    description: ''
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state)
    this.props.insertPost(this.state)
  }

  render() {
    const { name, description } = this.state;

    return (
      <div>
        <input className="InputAdd" placeholder="Ingrese un nombre" value={ name } name="name" onChange={this.handleChange} />
        <input className="InputAdd" placeholder="Ingrese una Descripción" value={ description } name="description" onChange={this.handleChange} />
        <button type="submit" className="Btn BtnAdd" onClick={this.handleSubmit}>
          <i className="fas fa-plus" /> Agregar
        </button>
      </div>
    );
  }
}

const mapStateToProps = ( state, props ) => ({
  listado: state.listado
})
const mapDispatchToProps = dispatch => ({
  insertPost: payload => dispatch(itemFetchInsertPost(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
