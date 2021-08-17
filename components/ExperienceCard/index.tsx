import Link from 'next/link';
import Image from 'next/image';

const ExperienceCard: React.FC = () => {
	return (
		<div className="experience-card">
			<div className="experience-card__img">
				<Image objectFit="contain" layout="fill" src="https://i0.wp.com/apptractor.ru/wp-content/uploads/2017/03/yandex.png?w=512&ssl=1" ></Image>
			</div>
			<div className="experience-card__info">
				<h3 className="experience-card__title">Yandex</h3>
				<div className="experience-card__duration">Nov. 2020 - March 2021</div>
				<div className="experience-card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error quidem cum eius recusandae, iure voluptatibus. Ex consequuntur illo numquam quas nam enim dolorem quasi perspiciatis soluta? Magni, dolores maxime!</div>
				<div className="experience-card__more">More...</div>
			</div>
		</div>
	);
}

export default ExperienceCard;