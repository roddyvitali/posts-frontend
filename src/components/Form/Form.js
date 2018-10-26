import React, { Component } from 'react';
import { connect } from 'react-redux';

import { itemFetchInsertPost } from '../../actions/main';

import './Form.css';

class Form extends Component {
  state = {
    name: '',
    description: ''
  }

  handleChange = this.handleChange.bind(this);
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    const { name, description } = this.state;
    return (
      <div>
        <input className="InputAdd" placeholder="Ingrese un nombre" value={ name } name="name" onChange={this.handleChange} />
        <input className="InputAdd" placeholder="Ingrese una Descripción" value={ description } name="description" onChange={this.handleChange} />
        <button type="submit" className="Btn BtnAdd" onClick={()=>this.props.insertPost(this.state) }>
          <i className="fas fa-plus" /> Agregar
        </button>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ({
  listado: state.listado
})
const mapDispatchToProps = dispatch => ({
  insertPost: payload => dispatch(itemFetchInsertPost(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
