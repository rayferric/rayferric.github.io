import { Link } from 'react-router-dom';

import './index.css'

export default function Navbar() {
	return (
		<div className='navbar'>
			<Link className='navbar-link' to='/' >Home</Link>
			<Link className='navbar-link' to='/about/' >About</Link>
			<Link className='navbar-link' to='/blog/' >Blog Posts</Link>
			<Link className='navbar-link' to='/blog/test/' >Test Blog Post</Link>
			<Link className='navbar-link' to='/project/' >Projects</Link>
			<Link className='navbar-link' to='/project/test/' >Test Project</Link>
			<Link className='navbar-link' to='/lol/' >Lol</Link>
		</div>
	);
}
