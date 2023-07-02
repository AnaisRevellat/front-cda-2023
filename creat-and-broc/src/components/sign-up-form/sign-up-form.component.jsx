import { useState } from "react";

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

//component
import FormInput from "../form_input/form-input.component";

import "./sign-up-form.component.scss";

//values of formFields
const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = ({ className }) => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } =
		formFields;

	console.log(formFields);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("password do not match");
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			/*createUserDocumentFromAuth allows us to access to the other info instead of 
        having NULL values here for displayName*/
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use ");
			}
			console.log("user creation encountered an error", error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value }); //overlap used
	};

	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Nom'
					className={className}
					required
					type='text'
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>

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

			
      
				<FormInput
          label="confirmation du mot de passe"
					className={className}
					required
					type='password'
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>

				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
