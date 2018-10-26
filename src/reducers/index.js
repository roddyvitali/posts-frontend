import { LOAD_POSTS, INSERT_POST, DELETE_POST, FILTER_POST } from '../common/config'

const data = (state, action) => {
    switch (action.type){
      case LOAD_POSTS: {
        const { response } = action.payload
        return {
          ...state, 
          listado: response
        }
      }
      case INSERT_POST: {
        const { response } = action.payload
        return {
          ...state,
          searchText: '',
          listado: [...state.listado, response ]
        }
      }
      case DELETE_POST: {
        const { response } = action.payload
        return {
          ...state, 
          searchText: '',
          listado: state.listado.filter((post)=>post.id !== response.id)
        }
      }
      case FILTER_POST: {
        const { search } = action.payload
        return {
          ...state,
          searchText: search,
          filterListado: state.listado.filter( (post) => post.name.toLowerCase().includes(search.toLowerCase()))
        }
      }

      default:
        return state
    }
  }
  
  export default data