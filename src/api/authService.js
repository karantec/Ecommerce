// authService.js
import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "../config/firebase.config";

// Sign in with Google (Popup method)
export const signInWithGooglePopup = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    console.log("result from auth page-> " + JSON(result, null, 2));

    // Save user data to Firestore
    await saveUserToFirestore(user);

    return {
      success: true,
      user: user,
      message: "Successfully signed in with Google",
    };
  } catch (error) {
    console.error("Google sign-in error:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};

// Sign in with Google (Redirect method - better for mobile)
export const signInWithGoogleRedirect = async () => {
  try {
    await signInWithRedirect(auth, googleProvider);
  } catch (error) {
    console.error("Google redirect sign-in error:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};

// Handle redirect result
export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      const user = result.user;
      await saveUserToFirestore(user);
      return {
        success: true,
        user: user,
      };
    }
    return { success: false };
  } catch (error) {
    console.error("Redirect result error:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};

// Save user data to Firestore
const saveUserToFirestore = async (user) => {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    // User doesn't exist, create new document
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createdAt: new Date(),
      lastLoginAt: new Date(),
      // Ecommerce specific fields
      cart: [],
      wishlist: [],
      orders: [],
      addresses: [],
      preferences: {
        newsletter: true,
        notifications: true,
      },
    });
  } else {
    // User exists, update last login
    await setDoc(
      userRef,
      {
        lastLoginAt: new Date(),
      },
      { merge: true }
    );
  }
};

// Sign out
export const signOutUser = async () => {
  try {
    await signOut(auth);
    return {
      success: true,
      message: "Successfully signed out",
    };
  } catch (error) {
    console.error("Sign out error:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};

// Auth state observer
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};
