import { useContext } from "react";

import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CreatBrocLogo } from "../../../src/assets/creat_and_broc_logo.svg";

import "./navigation.styles.scss";

//context
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	console.log(currentUser);

	const signOutHandler = async () => {
		await signOutUser();
		setCurrentUser(null);
	};

	return (
		<>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CreatBrocLogo className='logo' />
				</Link>

				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						Boutique
					</Link>

					{currentUser ? (
						<span className='nav-link' onClick={signOutHandler}>
							SIGN OUT
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							Sign In
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
