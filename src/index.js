import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from "@asgardeo/auth-react";

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider
  config={ {
    signInRedirectURL: "https://d3lxp769wsr3yo.cloudfront.net/main",
    signOutRedirectURL: "https://d3lxp769wsr3yo.cloudfront.net/",
    clientID: "m1GnVg2z5R_bOfUMnTZ_qpSsH90a",
    baseUrl: "https://api.asgardeo.io/t/awsgramacheck",
    scope: [ "openid","profile" ]      
  } }
  >
  <App />
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
  );






