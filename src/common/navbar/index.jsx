import './index.css'

import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar-links'>
				<NavLink className='navbar-links-item navbar-links-item-first' to='/' >HOME</NavLink>
				<NavLink className='navbar-links-item navbar-links-item-second' to='/posts/' >POSTS</NavLink>
				<NavLink className='navbar-links-item navbar-links-item-third' to='/about/' >ABOUT</NavLink>
			</div>
		</div>
	);
}
