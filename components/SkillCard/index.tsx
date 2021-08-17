import Image from 'next/image';

interface SkillCardProps {
	data: SkillItem;
}

const SkillCard: React.FC<SkillCardProps> = ({ data }) => {
	const className = `skill-card${data.img ? ' skill-card_with-img' : ''}${data.description ? ' skill-card_description' : ''}`;
	return (
		<div className={className}>
			{data.img && <div className="skill-card__img">
					<Image width={48} height={48} src={data.img.src} alt={data.img.alt}></Image>
				</div>
			}
			<div className="skill-card__info">
				<h3 className="skill-card__name">{data.name}</h3>
				<div className="skill-card__subtitle">{data.subtitle}</div>
			</div>
			{data.description && <div className="skill-card__description">{data.description}</div>}
		</div>
	);
}

export default SkillCard;