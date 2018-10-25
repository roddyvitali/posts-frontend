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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.props.filterPost({ [name]: value })

  }

  handleSubmit() {
    this.props.filterPost(this.state)
    // alert('A name was submitted: ' + this.state.search);
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <input className="InputSearch" placeholder="Filtro de Nombre" value={ search } name="search" onChange={this.handleChange} />
        <button type="submit" className="Btn BtnSearch" onClick={() => this.handleSubmit()}>
          <i className="fas fa-search" />
        </button>

      </div>
    );
  }
}
const mapStateToProps = ( state, props ) => ({})
const mapDispatchToProps = dispatch => ({
  filterPost: payload => dispatch(filterPost(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
