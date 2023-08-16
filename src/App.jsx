import "./App.css";
import SignIn from "./pages/SignIn";
import ChatRoom from "./pages/ChatRoom";
import SignOut from "./components/SignOut";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = import.meta.env.VITE_FIREABSE_KEY;

// Initialize Firebase
//TODO ENV VAR
const app = initializeApp({
  apiKey: "AIzaSyBr8q3Nv-I5IZMVoJQfZ3QqY6l8MOIIW-o",
  authDomain: "chat-z-api.firebaseapp.com",
  projectId: "chat-z-api",
  storageBucket: "chat-z-api.appspot.com",
  messagingSenderId: "303953053152",
  appId: "1:303953053152:web:159daa9e07522166d79785",
});

const auth = getAuth();
const firestore = getFirestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>Chat Z</h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
