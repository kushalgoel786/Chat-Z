import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function SignIn() {
  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <button className="sign-in" onClick={signInWithGoogle}>
      Sign In
    </button>
  );
}
export default SignIn;
