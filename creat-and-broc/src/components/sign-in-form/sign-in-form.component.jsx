import { useState } from "react";

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

//component
import FormInput from "../form_input/form-input.component";
import Button from "../button/button.component";
//scss
import "./sign-in-form.styles.scss";

//values of formFields
const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = ({ className }) => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	console.log(formFields);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			console.log(response);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("incorrect paswword for email");
					break;
				case "auth/user-not-found":
					alert("no user associated with this email");
					break;
				default:
					console.log(error);
			}
		}
	};
	// 	if(error.code=== "auth/wrong-password")
	// 	alert('incorrect password for email')
	// }

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value }); //overlap used
	};

	return (
		<div className={`sign-up-container`}>
			<h2>Compte existant ?</h2>
			<span>Connectez-vous avec votre email et mot de passe</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					className={className}
					required
					type='email'
					onChange={handleChange}
					name='email'
					value={email}
				/>

				{/* 	<label className={className}>Mot de passe</label> */}
				<FormInput
					label='Mot de passe'
					className={className}
					required
					type='password'
					onChange={handleChange}
					name='password'
					value={password}
				/>

				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						buttonType='google'
						onClick={signInWithGoogle}
					>
						Google sign in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
