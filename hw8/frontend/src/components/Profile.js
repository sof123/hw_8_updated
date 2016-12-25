//import {setLocation, getLocation} from '../location'
import React, { Component, PropTypes } from 'react'
import  {connect}  from 'react-redux'
import {updateZipAction, updateEmailAction} from './profileActions'

export const ProfileItem = ({updateEmail, email, updateZip, zipcode, logout, goToMain}) =>
{

  let zipCodeValue
  let emailValue


  return  (
        <div>

          <meta name="author" content="Simi Fagbemi" />
          <input type="button" defaultValue="Return to main page" onClick={goToMain} id="goToMainId" />
          <input type="button" defaultValue="logout" onClick={logout} id="logoutId" />
          <table>
            <tbody><tr>
                <td>Current profile picture </td>
                <td>
                  <img src="" id="currentProfilePic" height={125} width={100} />
                  Upload a new profile pic:
                  <input type="file" defaultValue="Upload new profile pic" />
                </td>
              </tr>
              <tr>
                <td>Display Name</td>
                <td>  <input name="DisplayName" required />
                  <span id="DisplayNameText"> </span>
                </td>
              </tr>
              <tr>
                <td>E-mail Address</td>
                <td><input name="Email" ref={(a)=>emailValue=a} type="email" />
                  <font id="EmailText"> {email} </font>
                </td>
              </tr>
              <tr>
                <td>Phone Number (format: 5555555555) </td>
                <td><input name="PhoneNumber" required type="tel" pattern="\d{10}" />
                  <span id="PhoneNumberText"> 5555555555 </span>
                </td>
              </tr>
              <tr>
                <td>Date of Birth </td>
                <td>
                  <span id="DOBText"> 01/01/1995 </span>
                </td>
              </tr>
              <tr>
                <td>Zipcode (format: 55555) </td>
                <td><input name="Zipcode" type="number" ref={(a)=>zipCodeValue=a} required />
                  <font id="ZipcodeText"> {zipcode} </font>
                </td>
              </tr>
              <tr>
                <td>Password </td>
                <td><input name="Password" required type="password" />
                  <span id="PasswordText"> </span>
                </td>
              </tr>
              <tr><td colSpan={2}><input type="button" defaultValue="Update" id="update" onClick={() => {updateZip(zipCodeValue);updateEmail(emailValue)}} /><br />
                </td></tr>
            </tbody></table>
        </div>
  )
}

/*ProfileItem.propTypes = {
    //id: PropTypes.number.isRequired,
    //location: PropTypes.symbol.isRequired
}
*/

export default connect( (state) =>
                        {
                          console.log(state)
                          return {
                            zipcode: state.zipcode,
                            email: state.email
                          }
                        },
  (dispatch, ownProps) => {
        return {
            logout: () => logoutAction()(dispatch),
            goToMain: () => dispatch({type: 'goToMainToDo', id: ownProps.id}),
            updatePassword: () => updatePasswordAction(dispatch),
            updateZip: (newZip) => updateZipAction(newZip)(dispatch),
            updateEmail: (newEmail) => updateEmailAction(newEmail)(dispatch)
        }
    })(ProfileItem)
