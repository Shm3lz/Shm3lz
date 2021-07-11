import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegramPlane} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const ResumeSocialsList: React.FC = () => {
	return (
		<ul className="resume-socials-list">
			<li className="resume-socials-list__item">
				<Link href="https://github.com/Shm3lz"><a><AiFillGithub size={24} /></a></Link>
			</li>
			<li className="resume-socials-list__item">
				<Link href="https://t.me/shm3lz"><a><FaTelegramPlane size={24} /></a></Link>
			</li>
			<li className="resume-socials-list__item">
				<Link href="mailto:shmelv3@yandex.ru"><a><IoIosMail size={24} /></a></Link>
			</li>
		</ul>
	);
} 

export default ResumeSocialsList;