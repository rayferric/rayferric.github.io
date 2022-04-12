import './index.css'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PostTypes from '../../post-types';

export default function Post(props) {
	const [metadata, setMetadata] = useState(null);

	useEffect(() => {
		fetch(`/posts/${props.id}/metadata.json`)
  			.then(response => response.json())
			.then(json => setMetadata(json));
	}, []);

	const postUrl = `/posts/${props.id}/`;
	const coverUrl = `/posts/${props.id}/cover.png`;
	const created = metadata ? new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }
			).format(new Date(metadata.created)) : 'Loading...';

	return (
		<Link className='post' to={ postUrl }>
			<img className='post-cover' src={ coverUrl } />
			<div className='post-info'>
				<p className='post-info-title'>{ metadata ? metadata.title : 'Loading...' }</p>
				<p className='post-info-meta'>{ metadata ? PostTypes[metadata.type].icon  : 'Loading...'  } &nbsp; { metadata ? PostTypes[metadata.type].name  : 'Loading...'  } &nbsp;&nbsp;&nbsp; <i className='post-info-meta-symbol fa-solid fa-calendar'></i> &nbsp; { created }</p>
				<p className='post-info-description'>{ metadata ? metadata.description : 'Loading...' }</p>
			</div>
		</Link>
	);
}
