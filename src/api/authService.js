// authService.js
import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import axios from "axios";

export const validateUserJWTToken = async (token) => {
  try {
    // Put Backend URL Here
    const res = await axios.get(`http://localhost:8000/auth/google-signin`, {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data.data;
  } catch (error) {
    return null;
  }
};
