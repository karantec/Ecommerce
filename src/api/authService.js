// authService.js
// import {
//   signInWithPopup,
//   signInWithRedirect,
//   getRedirectResult,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { doc, setDoc, getDoc } from "firebase/firestore";

import axios from "axios";

export const validateUserJWTToken = async (token) => {
  try {
    const res = await axios.post(
      "https://jewelleryapp.onrender.com/auth/google-signin",
      {
        idToken: token,
      }
    );

    return res.data.user; // returning the user object
  } catch (error) {
    console.error(
      "Token validation failed:",
      error.response?.data || error.message
    );
    return null;
  }
};
