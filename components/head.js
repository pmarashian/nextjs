import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
      <!-- The core Firebase JS SDK is always required and must be listed first -->
      <script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js"></script>

      <script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-auth.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-analytics.js"></script>

      <script>
          // Your web app's Firebase configuration
          var firebaseConfig = {
          apiKey: "AIzaSyC6LndIMCZK_0nhX5mYV_fX-EFRJXOm2Ag",
          authDomain: "finances-738aa.firebaseapp.com",
          databaseURL: "https://finances-738aa.firebaseio.com",
          projectId: "finances-738aa",
          storageBucket: "finances-738aa.appspot.com",
          messagingSenderId: "698486215131",
          appId: "1:698486215131:web:93dd76d279e4101dda57fe",
          measurementId: "G-Y16YRGPNDD"
      };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          firebase.analytics();
      </script>
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
