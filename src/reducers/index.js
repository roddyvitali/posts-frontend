
const data = (state, action) => {
    switch (action.type){
      case 'LOAD_POSTS': {
        console.log(action)
        const { response } = action.payload
        return {
          ...state, 
          listado: response
        }
      }
      case 'INSERT_POST': {
        console.log(action)
        const { response } = action.payload
        return {
          ...state, 
          listado: [...state.listado, response ]
        }
      }
      case 'DELETE_POST': {
        console.log(action)
        const { response } = action.payload
        console.log(response)
        
        return {
          ...state, 
          listado: state.listado.filter((post)=>post.id !== response.id)
        }
      }
      case 'FILTER_POST': {
        // console.log(action)
        const { search } = action.payload
        // console.log(response)
        // emp.filter(item =>!this.data.includes('ABC123'))
        return {
          ...state,
          searchText: search,
          filterListado: state.listado.filter( (post) => post.name.toLowerCase().includes(search.toLowerCase()))
        }
      }

      case 'TOGGLE_MENU': {
        const { visibleMenu } = action.payload
        // console.log('state', state)
        // console.log('payload', action.payload)
        return {
          ...state, 
          main: {
            ...state.main,
            visibleMenu,
          }
        }
      }
  
      case 'ACTIVE_MENU_COMPACT': {
        const { activeMenuCompact } = action.payload
        return {
          ...state, 
          main: {
            ...state.main,
            activeMenuCompact,
          }
        }
      }
  
      case 'RELOAD_SECTIONS': {
        // const { sections } = action.payload
        return {
          ...state, 
          main: {
            ...state.main,
            sections: action.payload
          }
        }
      }
  
      case 'ADD_SECTIONS': {
        console.log(action.payload)
        // const { sections } = action.payload
        return {
          ...state, 
          main: {
            ...state.main,
            sections: [
              ...state.main.sections,
              action.payload
            ],
          }
        }
      }
  
  
      case 'LOAD_TICKETS': {
        console.log( 'LOAD_TICKETS', action.payload )
        // const { sections } = action.payload
        return {
          ...state, 
          tickets: action.payload.tickets
        }
      }
      case 'LOAD_TICKET': {
        console.log('LOAD_TICKET', action.payload)
        // const { sections } = action.payload
        return {
          ...state,
          activeTicket: action.payload.ticket.id_ticket,
          ticket: action.payload.ticket,
          incidencias: action.payload.incidencias,
        }
      }
      default:
        return state
    }
  }
  
  export default data