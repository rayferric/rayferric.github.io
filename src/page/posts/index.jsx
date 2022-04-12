import './index.css';

import { useState, useEffect } from 'react';

import Post from '../../common/post';

export default function posts() {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		fetch('/posts.json')
				.then(response => response.json())
				.then(json => setPosts(json));
	}, []);
	
	return (
		<div className='posts'>
			<div className='posts-grid'>
				{posts ? posts.map((id, i) => <Post key={i} id={id}/>) : 'Loading...'}
			</div>
		</div>
	);
}
