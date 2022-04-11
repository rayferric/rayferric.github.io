import './index.css';

import { useState, useEffect } from 'react';

import Post from '../../common/post';

export default function Blog() {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		fetch('/posts/blog.json')
				.then(response => response.json())
				.then(json => setPosts(json));
	}, []);
	
	return (
		<div className='blog'>
			<div className='blog-grid'>
				{posts ? posts.map((id, i) => <Post key={i} type='blog' id={id}/>) : 'Loading...'}
			</div>
		</div>
	);
}
