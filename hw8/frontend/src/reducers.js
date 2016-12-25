import { RECEIVE_FOLLOWING, UNFOLLOW_SUCCESS, UPDATE_ZIP_SUCCESS,
			FOLLOW_SUCCESS, CLEAR_FOLLOW_ERROR, FOLLOW_FAILURE, UPDATE_EMAIL_SUCCESS } from './actions'

const Reducer = (state =  {
	nextId: 2,
	email: "",
	headline: "",
	followers: [],
	following: [],
	articles: [],
	zipcode: 11111,
	location: "Landing.js",
	posts: [],
	todoItems: [
	    {id: 0, text: "This is an item", done: false, displayArticles: false},
	    {id: 1, text: "Another item", done: false, displayArticles: false}
	],
	visibilityFilter: 'SHOW_ALL'
}, action) => {
	switch(action.type) {
		case 'loginToDo':
		console.log("in login todo ")
			return { ...state, nextId: state.nextId + 1, location: "Main.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}
		case 'logoutToDo':
			return { ...state, nextId: state.nextId + 1, location: "Landing.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}
		case 'goToProfileToDo':
			return { ...state, nextId: state.nextId + 1, location: "Profile.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}
		case 'updateHeadlineToDo':
			console.log("in update headline to do")
			console.log("payload", action.payload)
			return { ...state, nextId: state.nextId + 1, headline: action.payload.headline, location: "Main.js", posts: [...state.posts, action.text],
					todoItems: [ ...state.todoItems,
						{id:state.nextId, done: false,}]
			}
		case 'getArticlesToDo':
			return { ...state, nextId: state.nextId + 1, location: "Main.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false, displayArticles:true}]
		}
		case 'goToLandingToDo':
			return { ...state, nextId: state.nextId + 1, location: "Landing.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}
		case 'goToMainToDo':
			return { ...state, nextId: state.nextId + 1, location: "Main.js",
					todoItems: [ ...state.todoItems,
						{id:state.nextId, text: action.text, done: false}]
			}
		case UPDATE_ZIP_SUCCESS:
			return {
				...state,
				zipcode: action.payload.zipcode
			}
		case UPDATE_ZIP_SUCCESS:
			return {
				...state,
				email: action.payload.email
			}
		case CLEAR_FOLLOW_ERROR:
			return {
				...state,
				followError: null,
			}

		default:
			return {
				...state,
				nextId: state.nextId + 1,
				...action.payload,
			}
	}

}

function removedArray(arr, element)
{
  console.log("arr before is " + arr)
  var index = arr.indexOf(element);
  if (index > -1) {
    arr.splice(index, 1);
  }
  console.log("arr after is " + arr)
  return arr;
}

export default Reducer
