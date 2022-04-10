import './index.css'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Post(props) {
	const [metadata, setMetadata] = useState(null);

	useEffect(() => {
		fetch(`/posts/${props.type}/${props.id}/metadata.json`)
  			.then(response => response.json())
			.then(json => setMetadata(json));
	}, []);

	const postUrl = `/blog/${props.id}/`;
	const coverUrl = `/posts/${props.type}/${props.id}/cover.png`;
	const postTypeIcon = props.type == 'blog' ? <i className='post-info-meta-symbol fa-solid fa-mug-hot' /> : <i className='post-info-meta-symbol fa-solid fa-diagram-project' />;
	const postTypeName = props.type == 'blog' ? 'Blog' : 'Project';
	const created = metadata ? new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }
			).format(new Date(metadata.created)) : 'Loading...';

	return (
		<Link className='post' to={ postUrl }>
			<img className='post-cover' src={ coverUrl } />
			<div className='post-info'>
				<p className='post-info-title'>{ metadata ? metadata.title : 'Loading...' }</p>
				<p className='post-info-meta'>{ postTypeIcon } &nbsp; { postTypeName } &nbsp;&nbsp;&nbsp; <i className='post-info-meta-symbol fa-solid fa-calendar' /> &nbsp; { created }</p>
				<p className='post-info-description'>{ metadata ? metadata.description : 'Loading...' }</p>
			</div>
		</Link>
	);
}
