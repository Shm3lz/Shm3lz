import Image from 'next/image';

const SkillCard: React.FC = () => {
	return (
		<div className="skill-card">
			<div className="skill-card__img">
				<Image objectFit="contain" layout="fill" src="/1280px-React-icon.svg.png" ></Image>
			</div>
			<div className="skill-card__info">
				<h3 className="skill-card__name">React</h3>
				<div className="skill-card__subtitle">2+ years experience</div>
				<div className="skill-card__hint">Lorem ipsum, dolor sit amet consectetur adipisicing elit</div>
			</div>
		</div>
	);
}

export default SkillCard;