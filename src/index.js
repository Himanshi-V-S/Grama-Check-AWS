import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from "@asgardeo/auth-react";

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider
  config={ {
      signInRedirectURL: "https://d1lidqfrgb5glk.cloudfront.net/main",
      signOutRedirectURL: "https://d1lidqfrgb5glk.cloudfront.net",
      clientID: "rgfykPFL3gb_U3sJL1jIzKJbfRMa",
      baseUrl: "https://api.asgardeo.io/t/awsgramacheck",
      scope: [ "openid","profile" ]        
  } }
  >
  <App />
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
  );






