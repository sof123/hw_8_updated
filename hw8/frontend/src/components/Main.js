import React, { Component, PropTypes } from 'react'
import  {connect } from 'react-redux'
import Following from './Following'
import Follow from './Follow'
import Articles from './Articles'
import CreateArticle from './CreateArticle'
import {updateHeadlineAction, logoutAction, bindFollowToDispatch} from './profileActions'
export const MainItem = ({headline, logout, goToProfile, updateHeadline, getArticles }) =>{

  let headlineValue
  let followValue


  return  (
      <div>

        <div className="container" style={{position: 'relative', padding: '0 0 0 55px', backgroundColor: 'pink'}}>
          <input name="post" required />
          <input type="button" defaultValue="Post!" onclick id="postButton" />
          <input type="button" defaultValue="Cancel Post" onclick="clearPost()" id="cancelPostButton" />
          <input type="file" defaultValue="Upload Image" onclick id="uploadImageButton" />
          <br /><br />

          <Following />
          <CreateArticle />
          <Articles />
          <div style={{position: 'absolute', top: 0, bottom: 0, right: 0, width: 50}} id="sidebar">            <br />
            <br />
            <br />
            <br />
            <font style={{textAlign: 'right'}} id="pinkStickFigureHeadline">Hey its me</font>
            <br />
            <br />
            <input type="button" defaultValue="getPosts" onClick={getArticles} id="getArticles" />
            <br /><br />
            <img src="http://www.clker.com/cliparts/h/D/n/I/R/j/pink-female-stick-figure.svg" id="pinkStickFigureProfilePic" height={75} width={50} />
            <br />
            <br />

            <font style={{textAlign: 'right'}} id="pinkStickFigureName"></font>
            <br />
            <br />
            <font style={{textAlign: 'right'}} id="pinkStickFigureHeadline">Hi, hello there</font>
            <br />
            <br />
            <input type="button" defaultValue="Follow" onclick id="followPinkStickFigureButton" />
            <input type="button" defaultValue="Unfollow" id="unfollowPinkStickFigureButton" />
            <br /><br />
            <img src="http://www.clipartbest.com/cliparts/4cb/o7z/4cbo7zMdi.svg" id="blueStickProfilePic" height={75} width={50} />
            <br />
            <br />

            <br />
            <br />
            <font style={{textAlign: 'right'}} id="pinkStickFigureHeadline">"Whoa"</font>
            <br />
            <br />
            <input type="button" defaultValue="Follow"  id="followBlueStickFigureButton" />
            <input type="button" defaultValue="Unfollow" id="unfollowBlueStickFigureButton" />
          </div>
          <div style={{textAlign: 'center'}}>
            <img src="http://cliparts.co/cliparts/Mdi/9MK/Mdi9MKxc7.png" id="profilePic" height={150} width={100} />
            <br /><br />
            <span> </span>
            <br /><br />
            <font id="headlineFont">{headline} </font>
            <br /><br />
            <input id="headline" name="headline" ref={(a)=>headlineValue=a} required />
            <input type="button" defaultValue="Update Headline" onClick={() => updateHeadline(headlineValue)} id="updateHeadlineButton" />
            <br /><br />

            <Follow />

          </div>
          <input name="search" required />
          <input type="button" defaultValue="Search" onclick id="searchButton" />
          <br /><br />
          <input type="button" defaultValue="Profile" onClick={goToProfile} id="ProfileLink" />
          <br /><br />
          <input type="button" defaultValue="Logout" onClick={logout} id="LandingLink" />
          <br /><br />
          <br /><br />
          <table border={1} style={{width: '100%'}}>
            <tbody><tr>
              </tr>
              <tr>
                <td>
                  <input type="button" defaultValue="Comment" onclick id="pizzaButtonComment" />
                  <input type="button" defaultValue="Edit" onclick id="pizzaButtonEdit" />
                  <div>
                    <img src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201609170856" id="apple" height={900} width={600} />
                    <br />
                    <font size={10}> Lorem ipsum dolor sit amet. </font>
                  </div>
                </td>
                <td>
                  <div>
                    <font size={10}> Lorem ipsum dolor sit amet. </font>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="button" defaultValue="Comment" onclick id="bballButtonComment" />
                  <input type="button" defaultValue="Edit" onclick id="bballButtonEdit" />
                  <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png" id="bball" height={900} width={600} />
                  </div>
                </td>
                <td>
                  <div>
                    <font size={10}> Lorem ipsum dolor sit amet. </font>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="button" defaultValue="Comment" onclick id="moneyButtonComment" />
                  <input type="button" defaultValue="Edit" onclick id="moneyButtonEdit" />
                  <div>
                    <img src="http://i.forbesimg.com/media/2009/12/16/1216_cash-dollars_650x455.jpg" id="money" height={900} width={600} />
                    <br />
                    <font size={10}> Lorem ipsum dolor sit amet. </font>
                  </div>
                </td>
                <td>
                  <div>
                    <font size={10}> Lorem ipsum dolor sit amet. </font>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="button" defaultValue="Comment" onclick id="pizzaButtonComment" />
                  <input type="button" defaultValue="Edit" onclick id="pizzaButtonEdit" />
                  <div>
                    <img src="http://www.titospizzaspringhill.com/wp-content/uploads/2015/09/pixxa2.png" id="pizza" height={900} width={600} />
                  </div>
                </td>
                <td>
                  <div>
                    <font size={10}> Lorem ipsum dolor sit amet. </font>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div> </div>
                </td>
                <td>
                  <div> </div>
                </td>
                <td>
                  <div> </div>
                </td>
              </tr>
            </tbody></table>
        </div>
      </div>

  )
}

  export default connect( (state) =>
                          {
                            console.log(state)
                            return {
                              headline: state.headline,
                              following: state.following
                            }
                          },
    (dispatch, ownProps) => {
          return {
              logout: () => logoutAction()(dispatch),
              goToProfile: () => dispatch({ type: 'goToProfileToDo', id: ownProps.id }),
              updateHeadline: (newHeadline) => updateHeadlineAction(newHeadline)(dispatch),
          }
      })(MainItem)
