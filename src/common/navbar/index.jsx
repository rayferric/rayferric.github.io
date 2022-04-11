import './index.css'

import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='navbar'>
			<Link className='navbar-avatar' to='/' >
				<img className='navbar-avatar' src='/avatar.png' />
			</Link>
			<div className='navbar-links'>
				<NavLink className='navbar-links-item navbar-links-item-first' to='/about/' >ABOUT</NavLink>
				<NavLink className='navbar-links-item navbar-links-item-second' to='/blog/' >BLOG</NavLink>
				<NavLink className='navbar-links-item navbar-links-item-third' to='/project/' >PROJECTS</NavLink>
			</div>
		</div>
	);
}
