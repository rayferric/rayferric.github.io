import './index.css';

import Twemoji from 'react-twemoji';

import HelloWorld from '../../common/hello-world';

export default function About() {
	return (
		<div className='about'>
			<Twemoji options={{ className: 'twemoji' }}>
				<div className='about-greeting'>
					<img className='about-greeting-avatar' src='/avatar.png' alt='Avatar' />
					<div className='about-greeting-content'>
						<HelloWorld />
						<div className='about-greeting-content-description'>
							My passion is computer graphics programming. 💻
							GLSL shaders and OpenGL / Vulkan pipeline are no strangers to me.
							I'm keen on designing libraries and programmer friendly KISS-conformant interface. 🌱
							I love mathematics and analytic geometry, successfully applying them in computer science topics. 🧮
							I'm also a Linux enthusiast. 🐧 Minecraft is art. 🧱
						</div>
						<div className='about-greeting-content-contact'>
							<a className='about-greeting-content-contact-item
										about-greeting-content-contact-item-github'
									href='https://github.com/rayferric/' target='_blank' rel='noreferrer'>
								<i className='fa-brands fa-github' />
							</a>
							<a className='about-greeting-content-contact-item
										about-greeting-content-contact-item-email'
									href='mailto:&#x72;&#x61;&#x79;&#x66;&#x65;&#x72;&#x72;&#x69;&#x63;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;' target='_blank' rel='noreferrer'>
								<i className='fa-solid fa-at' />
							</a>
							<a className='about-greeting-content-contact-item
										about-greeting-content-contact-item-linkedin'
									href='https://www.linkedin.com/in/rayferric/' target='_blank' rel='noreferrer'>
								<i className='fa-brands fa-linkedin-in' />
							</a>
							<a className='about-greeting-content-contact-item
										about-greeting-content-contact-item-twitter'
									href='https://twitter.com/rayferric/' target='_blank' rel='noreferrer'>
								<i className='fa-brands fa-twitter' />
							</a>
							<a className='about-greeting-content-contact-item
										about-greeting-content-contact-item-youtube'
									href='https://www.youtube.com/channel/UCEXSCnKng23b0AukQ3JpI4w/' target='_blank' rel='noreferrer'>
								<i className='fa-brands fa-youtube' />
							</a>
						</div>
					</div>
				</div>
			</Twemoji>
		</div>
	);
}
