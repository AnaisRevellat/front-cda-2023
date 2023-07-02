//because of the redirect we ll need to import useEffect and getRedirectResult
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { 
	auth,
	signInWithGooglePopup, 
	signInWithGoogleRedirect,	
	createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import './sign-in.component.scss';



const SignIn = () => {

	const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user)    
  };


const logGoogleRedirectUser = async () => {
	    const {user} = await signInWithGoogleRedirect();
			console.log({user})
		 
  };


	return (
		<div>
			<h1>Sign In Page</h1>
      <button className="sign-in" onClick={logGoogleUser}>Sign in with Google Popup</button>
			<SignUpForm className="sign-up"/>
 
		</div>
	);
};

export default SignIn;
