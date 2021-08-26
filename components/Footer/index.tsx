import Link from 'next/link';

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<ul className="footer__contacts">
				<li className="footer__contact">
					<Link href="https://t.me/shm3lz"><a>Telegram</a></Link>
				</li>
				<li className="footer__contact">
					<Link href="https://github.com/Shm3lz"><a>Github</a></Link>
				</li>
				<li className="footer__contact">
					<Link href="mailto:shmelv3@yandex.ru"><a>shmelv3@yandex.ru</a></Link>
				</li>
				<li className="footer__contact">
					<Link href="https://hh.ru/resume/35f701c2ff0902c8cb0039ed1f79724b497574"><a>hh.ru</a></Link>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;