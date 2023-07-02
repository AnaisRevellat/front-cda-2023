import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

//scss
import "./authentication.styles.scss";

const Authentication = () => {
	return (
		<section className='home-container authentication-container'>
			<div className="main-form-container">
				<SignInForm />
				<SignUpForm className='sign-up' />
			</div>
		</section>
	);
};

export default Authentication;
