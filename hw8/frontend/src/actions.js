import fetch from "isomorphic-fetch"

export const RECEIVE_FOLLOWING = 'app/RECEIVE_FOLLOWING'
export const UNFOLLOW_SUCCESS = 'app/UNFOLLOW_SUCCESS'
export const FOLLOW_SUCCESS = 'app/FOLLOW_SUCCESS'
export const CLEAR_FOLLOW_ERROR = "app/CLEAR_FOLLOW_ERROR"
export const FOLLOW_FAILURE = "app/FOLLOW_FAILURE"
export const FETCH_FEED_SUCCESS = "app/FETCH_FEED_SUCCESS"
export const CREATE_ARTICLE_SUCCESS = "app/CREATE_ARTICLE_SUCCESS"
export const UPDATE_ZIP_SUCCESS = "app/UPDATE_ZIP_SUCCESS"
export const UPDATE_EMAIL_SUCCESS = "app/UPDATE_EMAIL_SUCCESS"


export const url = 'http://localhost:3000'


function isJSONResponse(r) {
  return r.headers.get('Content-Type').indexOf('json') > 0
}

const resource = (method, endpoint, payload) => {
  const options = {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  console.log(payload)
  if (payload) options.body = JSON.stringify(payload)

  return fetch(`${url}/${endpoint}`, options)
    .then(r => {
      if (r.status === 200) {
        if (isJSONResponse(r)){
          return r.json().then(json => json)
        }
        else {
          return r.text().then(text => text)
        }
      } else {
        //to deebug
        console.log(`${method} ${endpoint} ${r.statusText}`)
        // throw new Error(r.statusText)
        if (isJSONResponse(r)) {
          return r.json().then(
            json => {throw new Error(json.error)}
          )
        }
      }
    })
}

export default resource
