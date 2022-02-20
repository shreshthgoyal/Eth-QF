import React, { Component } from 'react';
import './Verify.css';
import firebaseConfig  from './config';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

class App extends Component {

  componentDidMount() {
    const fbase = firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInSuccessUrl: `${window.location}/fund` , //This URL is used to return to that page when we got success response for phone authentication.
      signInOptions:  { provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID, 
        defaultCountry: 'IN', }
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <div id="firebaseui-auth-container">
      </div>
    )
  }
}

export default App;