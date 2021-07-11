import { useMemo } from 'react';
import ExperienceCard from '../ExperienceCard';

const TimeLine: React.FC<{ color?: string }> = ({ color = 'black' }) => {
	const style = useMemo(() => ({ backgroundColor: color }), [color]);

	return <span style={style} className="experience-list__timeline" />;
}

const ExperienceList: React.FC = () => {
	return (
		<ul className="experience-list">
			<li className="experience-list__item">
				<TimeLine color="red" />
				<ExperienceCard />
			</li>
			<li className="experience-list__item">
				<TimeLine />
				<ExperienceCard />
			</li>
			<li className="experience-list__item">
				<TimeLine />
				<ExperienceCard />
			</li>
		</ul>
	);
}

export default ExperienceList;