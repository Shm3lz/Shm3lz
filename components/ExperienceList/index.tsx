import { useMemo } from 'react';
import ExperienceCard from '../ExperienceCard';

const TimeLine: React.FC<{ color?: string }> = ({ color = 'black' }) => {
	const style = useMemo(() => ({ backgroundColor: color }), [color]);

	return <span style={style} className="experience-list__timeline" />;
}

const TimeDot: React.FC<{ color?: string }> = ({ color = 'gray' }) => {
	const style = useMemo(() => ({ backgroundColor: color }), [color]);

	return <div style={style} className="experience-list__timedot"></div>;
}

const ExperienceList: React.FC = () => {
	return (
		<ul className="experience-list">
			<li className="experience-list__item">
				{/* <TimeLine color="red" /> */}
				<TimeDot />
				<ExperienceCard />
			</li>
			<li className="experience-list__item">
				{/* <TimeLine /> */}
				<TimeDot />
				<ExperienceCard />
			</li>
			<li className="experience-list__item">
				{/* <TimeLine /> */}
				<TimeDot />
				<ExperienceCard />
			</li>
		</ul>
	);
}

export default ExperienceList;