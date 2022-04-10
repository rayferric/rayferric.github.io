import './index.css';

export default function HelloWorld() {
	return (
		<div className='hello-world'>
			<p className='hello-world-greeting'>👋 Hello, world!</p>
			<p className='hello-world-introduction'>I'm
				<span className='hello-world-introduction-name'> Ray Ferric</span>
				<span className='hello-world-introduction-appendix'> (orig. Rafał Żelazko)</span>
			</p>
		</div>
	);
}
