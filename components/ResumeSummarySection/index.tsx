import { BsGeoAlt } from 'react-icons/bs';
import Link from 'next/link';
import ResumeSocialsList from '../ResumeSocialsList';

const ResumeSummarySection: React.FC<{ data: MetaInfo  }>= ({ data }) => {
	return (
		<div className="summary">
			<div className="summary__main">
				<h1 className="summary__tag">{data.tag}</h1>
				<div className="summary__name">{data.name}</div>
				<div className="summary__age">{data.age} y. o.</div>
				<div className="summary__prof">{data.prof}</div>
				<div className="summary__geo"><BsGeoAlt /><span className="summary__city">{data.location}</span></div>
			</div>
			<div className="summary__download">
				<Link href="/cv.pdf"><a>Download CV</a></Link>
			</div>
			<div className="summary__socials">
				<ResumeSocialsList />
			</div>
		</div>
	);
}

export default ResumeSummarySection;