import React, { Component, PropTypes } from 'react'
import  {connect } from 'react-redux'

import {getMyFollowingAction, bindUnfollowToDispatch} from './profileActions'


class Following extends Component {
  componentDidMount() {
    this.props.getMyFollowing()
  }

  render() {
    const { following } = this.props
    if (!following) return null
    return (
      <div>
        <h1>Following</h1>
        {following.map(username => (
          <div>
            <p>{username}</p>
            <button onClick={() => this.props.unfollow(username)}>Unfollow</button>
          </div>

        ))}
      </div>
    )
  }
}

export default connect(
  state => ({
    following: state.following
  }),
  dispatch => ({
    getMyFollowing: getMyFollowingAction(dispatch),
    unfollow: bindUnfollowToDispatch(dispatch),
  })
)(Following)
