import { URL_SERVER, LOAD_POSTS, INSERT_POST, DELETE_POST, FILTER_POST } from './../common/config'

export const itemFetchDataPosts = () =>{
  return (dispatch) => {
      fetch( `${URL_SERVER}`, {
        method: 'GET'
      })
      .then( response => response.json() )
      .then((items) => {
        return( dispatch( getAllPosts(items) ) )
      } )
  };
}

export const itemFetchDeletePosts = id => {
    return (dispatch) => {
        fetch( `${URL_SERVER}/${id}`, {
          method: 'DELETE'
        })
        .then( response => response.json() )
        .then((items) => {
          return( dispatch( deletePost(items) ) )
        } )
    };
  }

export const itemFetchInsertPost = post => {
    return (dispatch) => {
        fetch( `${URL_SERVER}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(post)
        })
        .then( response => response.json() )
        .then((items) => {
          return( dispatch( insertPost(items) ) )
        } )
    };
}

export const getAllPosts = payload => ({
  type: LOAD_POSTS,
  payload
})

export const insertPost = payload => ({
  type: INSERT_POST,
  payload
})

export const deletePost = payload => ({
  type: DELETE_POST,
  payload
})

export const filterPost = payload => ({
  type: FILTER_POST,
  payload
})