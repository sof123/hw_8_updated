import resource, { RECEIVE_FOLLOWING, UNFOLLOW_SUCCESS, FOLLOW_SUCCESS, CLEAR_FOLLOW_ERROR,
                  FOLLOW_FAILURE, FETCH_FEED_SUCCESS, UPDATE_ZIP_SUCCESS, UPDATE_ZIP_FAILURE,
                UPDATE_EMAIL_SUCCESS} from '../actions'

const updateHeadlineAction = (newHeadline) => (dispatch) =>{
  console.log("new headline is " + newHeadline.value)

  return resource('PUT', 'headline', {
      headline: newHeadline.value
  }).then(r =>
    {
      console.log(r)
      return (dispatch({
      type: 'updateHeadlineToDo',
      payload: r
  }))})
}

const logoutAction = (ownProps) => (dispatch) => resource('PUT', 'logout').then(r =>
  (dispatch({
    type: 'logoutToDo',
    //id: ownProps.id,
    payload: "OK"
})))



const loginAction = (username, password) => (dispatch) => {
  console.log(username, password)
  const loginObject = {username: username, password: password}

  return  resource('POST', 'login', loginObject).then(r =>
  (dispatch({
    type: 'loginToDo',
    //id: ownProps.id,
    payload: r
  })))
}

const registerAction = (user) => (dispatch) => {
const  registerObj = {
    username: user.username.value,
    email: user.email.value,
    dob: user.dob.value,
    zipcode: user.zip.value,
    password: user.password.value
  }
  console.log("Register Object is " + registerObj)
  return  resource('POST', 'register', registerObj).then(r =>
  (dispatch({
    type: 'registerToDo',
    //id: ownProps.id,
    payload: r
  })))
}

export const bindFetchFeedToDispatch = (dispatch) => () => {
  return resource('GET', 'articles')
    .then(json =>
      dispatch({
        type: FETCH_FEED_SUCCESS,
        payload: json
      })
    )
}


export const bindFollowToDispatch = (dispatch) => (username) => {

  dispatch({ type: CLEAR_FOLLOW_ERROR })

  return  resource('PUT', `following/${username}`)
    .then(json =>
      dispatch({
        type: FOLLOW_SUCCESS,
        payload: json
      })
    )
    .catch(err =>
      dispatch({
        type: FOLLOW_FAILURE,
        error: true,
        payload: {
          followError: err.message
        }
      })
    )
}

export const updateZipAction = (newZip) => (dispatch) =>{

  return resource('PUT', 'zipcode', {
      zipcode: newZip.value
  }).then(r =>
    {
      return (dispatch({
      type: UPDATE_ZIP_SUCCESS,
      payload: r
  }))})
}

export const updateEmailAction = (newEmail) => (dispatch) =>{
  console.log("in update email action")
  return resource('PUT', 'email', {
      email: newEmail.value
  }).then(r =>
    {
      return (dispatch({
      type: UPDATE_EMAIL_SUCCESS,
      payload: r
  }))})
}

export const bindUnfollowToDispatch = (dispatch) => (username) => {
  resource('DELETE', `following/${username}`).then(json => {
    console.log('unfollow json is', json)
    dispatch({
      type: UNFOLLOW_SUCCESS,
      payload: json
    })
  })
}

const getMyFollowingAction = (dispatch) => () => {
  resource('GET', 'following').then(json => {
    dispatch({
      type: RECEIVE_FOLLOWING,
      payload: json
    })
  })
  // console.log("in getMyFollowingAction")
  //
  // return resource('GET', 'following').then(r =>
  //   (dispatch({
  //     type: 'getMyFollowingToDo',
  //     //id: ownProps.id,
  //     payload: r
  // })))
}

export {updateHeadlineAction, logoutAction, loginAction, registerAction, getMyFollowingAction}
