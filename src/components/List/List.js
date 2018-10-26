import React from 'react';
import { connect } from 'react-redux';
import { itemFetchDeletePosts } from '../../actions/main';

import './List.css';

const Rows = ({ list, deletePost }) => {
  console.log(list)
  return(
      list.map( (item, index) => 
        <tr key={index}>
          <td><p className="TextNameBody">{item.name}</p></td>
          <td>
            <p className="TextDescBody">{item.description}</p>
          </td>
          <td className="ColBodyAction">
            <span className="ItemRemove" onClick={ () => deletePost(item.id)}><i className="IconRemove fas fa-minus" /> Eliminar</span>
          </td>
        </tr> 
      )
  )
}
const ListEmpty = () => {
  return(
      <tr>
        <td className="ColEmpty" colSpan="3">
          <i className="IconEmpty far fa-sad-cry fa-8x"></i><br />
          Lo Sentimos! no hay posts para mostrar
        </td>
      </tr>
  )
}
const List = (props) => {
  const { listado, search, filterListado, deletePost } = props;
  return(
    <div className="ContainerList">
        <table>
          <thead>
            <tr>
              <th className="ColName">Nombre</th>
              <th className="ColDesc">Descripción</th>
              <th className="ColAction">Acción</th>
            </tr>
          </thead>
          <tbody>
            { listado.length > 0 ? 
              <Rows list={ search !== '' ? filterListado : listado } deletePost={ deletePost } />
            :
              <ListEmpty />
            } 
          </tbody>
        </table>
      </div>
  )
}

const mapStateToProps = ( state ) => ({
  filterListado: state.filterListado,
    listado: state.listado,
    search: state.searchText
})
const mapDispatchToProps = dispatch => ({
  deletePost: payload => dispatch(itemFetchDeletePosts(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
