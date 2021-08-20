import Image from 'next/image';

const ExperienceCard: React.FC<{ data: ExperienceItem }> = ({ data }) => {
	return (
		<div className="experience-card">
			{data.img && <div className="experience-card__img">
					<Image objectFit="contain" layout="fill" src={data.img.src} alt={data.img.alt} ></Image>
				</div>
			}
			<div className="experience-card__info">
				<h3 className="experience-card__title">{data.title}</h3>
				<div className="experience-card__duration">{data.durationStart}{data.durationEnd && ` - ${data.durationEnd}`}</div>
				<div className="experience-card__description">{data.description}</div>
			</div>
		</div>
	);
}

export default ExperienceCard;