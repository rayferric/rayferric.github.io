const iconStyle = { color: 'gray', backgroundColor: 'transparent' };

const PostTypes = {
	blog: {
		name: 'Blog',
		icon: <i className='fa-solid fa-mug-hot' style={ iconStyle }></i>
	},
	library: {
		name: 'Library',
		icon: <i className='fa-solid fa-book' style={ iconStyle }></i>
	},
};

export default PostTypes;
