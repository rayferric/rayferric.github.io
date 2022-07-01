import './index.css'

export default function Footer() {
	return (
		<div className='footer'>
			<p className='footer-text'>Made with&nbsp;</p>
			<a href='https://github.com/rayferric/rayferric.github.io/' target='_blank' rel='noreferrer'><i className='footer-heart fa-regular fa-heart' /></a>
			<p className='footer-text'>&nbsp;(and&nbsp;</p>
			<a href='https://reactjs.org/' target='_blank' rel='noreferrer'><i className='footer-react fa-brands fa-react' /></a>
			<p className='footer-text'>)</p>
		</div>
	);
}
