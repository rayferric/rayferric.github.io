import './index.css'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'react-remarkable';
import hljs from 'highlight.js';
import 'highlight.js/styles/rainbow.css';
import { Utterances } from 'utterances-react-component';
import Twemoji from 'react-twemoji';

import PostTypes from '../../post-types';

function highlight(str, lang) {
	if (lang && hljs.getLanguage(lang)) {
		try {
			return hljs.highlight(lang, str).value;
		} catch (err) {
			console.error(err);
		}
	}

	try {
		return hljs.highlightAuto(str).value;
	} catch (err) {
		console.error(err);
	}

	return '';
};

export default function PostView() {
	const params = useParams();
	const [metadata, setMetadata] = useState(null);
	const [content, setContent] = useState(null);

	useEffect(() => {
		fetch(`/posts/${params.id}/metadata.json`)
  			.then(response => response.json())
			.then(json => setMetadata(json));

		fetch(`/posts/${params.id}/post.md`)
			.then(response => response.text())
			.then(text => setContent(text));
	}, [params.id]);

	const coverUrl = `/posts/${params.id}/cover.png`;
	const created = metadata ? new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }
			).format(new Date(metadata.created)) : 'Loading...';
	const coverStyle = { backgroundImage: `url('${coverUrl}')` };

	return (
		<div className='post-view'>
			<Twemoji options={{ className: 'twemoji' }}>
				<div className='post-view-cover'>
					<div className='post-view-cover-image' style={ coverStyle } />
					<div className='post-view-cover-overlay' />
				</div>
				<div className='post-view-info'>
					<div className='post-view-info-content'>
						<p className='post-view-info-content-title'>{ metadata ? metadata.title : 'Loading...' }</p>
						<p className='post-view-info-content-description'>{ metadata ? metadata.description : 'Loading...' }</p>
						<p className='post-view-info-content-meta'>{ metadata ? PostTypes[metadata.type].icon  : 'Loading...'  } &nbsp; { metadata ? PostTypes[metadata.type].name  : 'Loading...'  } &nbsp;&nbsp;&nbsp; <i className='post-view-info-meta-symbol fa-solid fa-calendar' /> &nbsp; { created }</p>
					</div>
				</div>
				<div className='post-view-display'>
					<div className='post-view-display-content'>
						<Markdown options={{
							html: true,
							highlight: highlight
						}}>
							{ content ? content : 'Loading...' }
						</Markdown>
					</div>
				</div>
				<Utterances
						repo='rayferric/rayferric.github.io'
						issueTerm='pathname'
						theme='dark-blue'
				/>
			</Twemoji>
		</div>
	);
}
