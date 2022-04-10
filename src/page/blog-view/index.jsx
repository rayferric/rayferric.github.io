import { useParams } from "react-router-dom";

export default function BlogView() {
	const params = useParams();

	return (
		<div className='blog-view'>
			Blog Post #{params.id}
		</div>
	);
}
