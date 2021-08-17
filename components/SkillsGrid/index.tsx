import SkillCard from '../SkillCard';

interface SkillsGridProps {
	items: SkillItem[];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ items }) => {
	return (
		<div className="skills-grid">
			{items.map((item, index) => (
				<SkillCard key={index} data={item} />
			))}
		</div>
	);
}

export default SkillsGrid;