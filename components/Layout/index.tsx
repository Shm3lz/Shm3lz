import { useMemo } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import Footer from "../Footer"
import { Locales } from '../../locales';

const LocaleButton: React.FC<{ selected?: boolean, href: string, locale?: string }> = ({ href, locale, selected, children }) => {
	const cls = useMemo(() => `locales__button${selected ? ' locales__button-selected' : ''}`, [selected]);

	return <Link href={href} locale={locale}><a className={cls}>{children}</a></Link>;
}

const Layout: React.FC = ({ children }) => {
	const { locale } = useRouter();
	const isRusLocale = locale === Locales.RU;
	const isEngLocale = locale === Locales.EN;

    return (
        <>
			<header>
				<div className="locales">
					<LocaleButton href="/" locale={Locales.RU} selected={isRusLocale}>Ru</LocaleButton>
					<span>{' | '}</span>
					<LocaleButton href="/" locale={Locales.EN} selected={isEngLocale}>En</LocaleButton>
				</div>
			</header>
			<div className="container">
				<main>
					{children}
				</main>
			</div>
			<Footer />
        </>
    );
}

export default Layout;