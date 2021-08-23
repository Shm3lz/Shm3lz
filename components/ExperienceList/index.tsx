import { useMemo } from 'react';
import ExperienceCard from '../ExperienceCard';

const TimeLine: React.FC<{ color?: string }> = ({ color = 'black' }) => {
	const style = useMemo(() => ({ backgroundColor: color }), [color]);

	return <span style={style} className="experience-list__timeline" />;
}

const TimeDot: React.FC<{ color?: string }> = ({ color }) => {
	const style = useMemo(() => ({ backgroundColor: color }), [color]);

	return <div style={style} className="experience-list__timedot"></div>;
}

interface ExperienceListProps {
	items: ExperienceItem[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ items }) => {
	return (
		<ul className="experience-list">
			{items.map((item, index) => (
				<li
					className="experience-list__item"
					key={index}
					style={{ animationDelay: `${items.length - index - 1}s`}}
				>
					<TimeDot />
					<ExperienceCard data={item} />
				</li>
			))}
		</ul>
	);
}

export default ExperienceList;