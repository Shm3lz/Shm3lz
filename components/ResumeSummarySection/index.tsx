import { BsGeoAlt } from 'react-icons/bs';
import Link from 'next/link';
import ResumeSocialsList from '../ResumeSocialsList';

const ResumeSummarySection: React.FC = () => {
	return (
		<div className="summary">
			<div className="summary__main">
				<h1 className="summary__tag">@shm3lz</h1>
				<div className="summary__name">Vlad Yeliseev</div>
				<div className="summary__age">20 y. o.</div>
				<div className="summary__prof">Frontend dev</div>
				<div className="summary__geo"><BsGeoAlt /><span className="summary__city">Moscow</span></div>
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