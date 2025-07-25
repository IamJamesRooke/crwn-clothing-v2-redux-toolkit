import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAMAkoT6KHuTrNa75nuXsibxmEpq8Wivgs",
  authDomain: "crwn-clothing-23921.firebaseapp.com",
  projectId: "crwn-clothing-23921",
  storageBucket: "crwn-clothing-23921.firebasestorage.app",
  messagingSenderId: "309983003783",
  appId: "1:309983003783:web:e5dc86970859528d61a422"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);