import { useState } from 'react';

import './sign-up-form.component.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = ({className}) => {
  return(
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label className={className}>Nom</label>
        <input required type="text" />

        <label className={className}>Email</label>
        <input required type="email" />

        <label className={className}>Mot de passe</label>
        <input required type="password" />

        <label className={className}>Confirmation du mot de passe</label>
        <input required type="password" />
        <button type="submit">Sign Up</button>

      </form>
  
    </div>
  )
}

export default SignUpForm;