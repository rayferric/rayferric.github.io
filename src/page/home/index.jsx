import './index.css';

import { useState, useEffect } from 'react';

import HelloWorld from '../../common/hello-world';
import Post from '../../common/post';

export default function Home() {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		fetch('/home.json')
				.then(response => response.json())
				.then(json => setPosts(json));
	}, []);

	return (
		<div className='home'>
			<div className='home-greeting'>
				<img className='home-greeting-avatar' src='/avatar.png' />
				<div className='home-greeting-content'>
					<HelloWorld />
					<div className='home-greeting-content-description'>
						Take a look at some of my featured posts:
					</div>
				</div>
			</div>
			<div className='home-posts'>
				<div className='home-posts-grid'>
					{posts ? posts.map((id, i) => <Post key={i} id={id}/>) : 'Loading...'}
				</div>
			</div>
		</div>
	);
}
