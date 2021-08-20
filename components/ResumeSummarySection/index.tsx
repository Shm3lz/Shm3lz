import { BsGeoAlt } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

import ResumeSocialsList from '../ResumeSocialsList';
import { useRouter } from 'next/dist/client/router';
import { Locales } from '../../i18n/locales';

const ResumeSummarySection: React.FC<{ data: MetaInfo  }>= ({ data }) => {
	const { locale } = useRouter();
	return (
		<div className="summary">
			<div className="summary__main">
				<h1 className="summary__tag">{data.tag}</h1>
				<div className="summary__name">{data.name}</div>
				<div className="summary__age">{data.age} y. o.</div>
				<div className="summary__prof">{data.prof}</div>
				<div className="summary__geo"><BsGeoAlt /><span className="summary__city">{data.location}</span></div>
			</div>
			{locale === Locales.RU && <div className="summary__download">
					<Link href="/cv.pdf"><a>Скачать CV</a></Link>
				</div>
			}
			<div className="summary__socials">
				<ResumeSocialsList />
			</div>
		</div>
	);
}

export default ResumeSummarySection;