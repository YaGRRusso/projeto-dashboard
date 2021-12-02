import firebase, { initializeApp } from "firebase/app";
import 'firebase/auth'

if ( !firebase.apps.length ) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  })
}

export default firebase