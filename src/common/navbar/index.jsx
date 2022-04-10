import './index.css'

import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='navbar'>
			<Link to='/' ><img className='navbar-avatar' src='/avatar.png' /></Link>
			<div className='navbar-links'>
				<NavLink className='navbar-links-item' to='/about/' >ABOUT</NavLink>
				<NavLink className='navbar-links-item' to='/blog/' >BLOG</NavLink>
				<NavLink className='navbar-links-item' to='/project/' >PROJECTS</NavLink>
			</div>
		</div>
	);
}
