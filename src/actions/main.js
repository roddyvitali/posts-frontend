import { URL_SERVER, LOAD_POSTS, INSERT_POST, DELETE_POST, FILTER_POST } from './../common/config'



export function itemFetchDataPosts() {
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

export function itemFetchDeletePosts(id) {
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

export function itemFetchInsertPost(post) {
    return (dispatch) => {
        let formData  = new FormData(post);
        console.log(formData)
        // fetch( `${URL_SERVER}`, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   },
        //   body: formData
        // })
        // .then( response => response.json() )
        // .then((items) => {
        //   return( dispatch( insertPost(items) ) )
        // } )
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