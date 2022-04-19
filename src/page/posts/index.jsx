import './index.css';

import { useState, useEffect } from 'react';
import Twemoji from 'react-twemoji';

import Post from '../../common/post';

export default function Posts() {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		fetch('/posts.json')
				.then(response => response.json())
				.then(json => setPosts(json));
	}, []);
	
	return (
		<div className='posts'>
			<Twemoji options={{ className: 'twemoji' }}>
				<div className='posts-grid'>
					{posts ? posts.map((id, i) => <Post key={i} id={id}/>) : 'Loading...'}
				</div>
			</Twemoji>
		</div>
	);
}
