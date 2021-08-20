import Link from 'next/link';

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<ul className="footer__contacts">
				<li className="footer__contact">
					<Link href="#"><a>Telegram</a></Link>
				</li>
				<li className="footer__contact">
					<Link href="#"><a>Github</a></Link>
				</li>
				<li className="footer__contact">
					<Link href="#"><a>shmelv3@yandex.ru</a></Link>
				</li>
				<li className="footer__contact">
					<Link href="#"><a>hh.ru</a></Link>
				</li>
				<li className="footer__contact">
					<Link href="#"><a>Moikrug</a></Link>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;