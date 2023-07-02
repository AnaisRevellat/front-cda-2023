import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CreatBrocLogo } from '../../../src/assets/creat_and_broc_logo.svg'

import './navigation.styles.scss'

const Navigation = () => {
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
          <Link className='nav-link' to='/sign-in'>
						Sign In
					</Link>
				</div>
			</div>
			<Outlet />
		</>

    
	);
};

export default Navigation;
