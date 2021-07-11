import Link from 'next/link';

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<ul className="footer__contacts">
				<li className="footer__contact">
					<Link href="#"><a>Test </a></Link>
				</li>
				<li className="footer__contact">
					<Link href="#"><a>TEst</a></Link>
				</li>
				<li className="footer__contact">
					<Link href="#"><a>TEst</a></Link>
				</li>
				<li className="footer__contact">
					<Link href="#"><a>TEst</a></Link>
				</li>
				<li className="footer__contact">
					<Link href="#"><a>Test</a></Link>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;