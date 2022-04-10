import { useParams } from "react-router-dom";

export default function ProjectView() {
	const params = useParams();

	return (
		<div className='project-view'>
			Project #{params.id}
		</div>
	);
}
