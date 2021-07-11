import Link from 'next/link';

const ResumeNavList: React.FC = () => {
	return (
		<ul className="resume-nav-list">
			<li className="resume-nav-list__item">
				<Link href="#about"><a>About</a></Link>
			</li>
			<li className="resume-nav-list__item">
				<Link href="#exp"><a>Experience</a></Link>
			</li>
			<li className="resume-nav-list__item">
				<Link href="#skills"><a>Skills</a></Link>
			</li>
			<li className="resume-nav-list__item">
				<Link href="#link"><a>Links</a></Link>
			</li>
		</ul>
	);
} 

export default ResumeNavList;