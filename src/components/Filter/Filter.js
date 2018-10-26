import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterPost } from '../../actions/main';
import './Filter.css';

class Filter extends Component {
  state = {
    search: ''
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.props.filterPost({ [name]: value })
  }



  render() {
    const { search } = this.state;
    return (
      <div>
        <input className="InputSearch" placeholder="Filtro de Nombre" value={ search } name="search" onChange={this.handleChange} />
        <button type="submit" className="Btn BtnSearch" onClick={ () => this.props.filterPost(this.state) }>
          <i className="fas fa-search" />
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  filterPost: payload => dispatch(filterPost(payload))
})

export default connect(null, mapDispatchToProps)(Filter);
