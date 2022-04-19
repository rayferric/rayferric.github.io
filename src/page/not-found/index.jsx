import './index.css';

import Twemoji from 'react-twemoji';

export default function NotFound() {
	return (
		<div className='not-found'>
			<Twemoji options={{ className: 'twemoji' }}>
				<div>
					<p className='not-found-code'>404</p>
					<p className='not-found-text'>Not Found</p>
				</div>
			</Twemoji>
		</div>
	);
}
