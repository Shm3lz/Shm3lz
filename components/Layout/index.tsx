import { useMemo, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { IoSunny, IoMoon } from 'react-icons/io5';

import Footer from "../Footer"
import { Locales } from '../../i18n/locales';
import { useCallback } from 'react';

const LocaleButton: React.FC<{ selected?: boolean, href: string, locale?: string }> = ({ href, locale, selected, children }) => {
	const cls = useMemo(() => `locales__button${selected ? ' locales__button-selected' : ''}`, [selected]);

	return <Link href={href} locale={locale}><a className={cls}>{children}</a></Link>;
}

const Layout: React.FC = ({ children }) => {
	const { locale } = useRouter();
	const isRusLocale = locale === Locales.RU;
	const isEngLocale = locale === Locales.EN;

	const [isLightTheme, setIsLightTheme] = useState(false);
	const themeCls = useMemo(() => `theme_${isLightTheme ? 'light' : 'dark'}`, [isLightTheme]);
	const handleThemeSwitch = useCallback(() => setIsLightTheme(!isLightTheme), [isLightTheme, setIsLightTheme]);

    return (
        <div className={themeCls}>
			<div className="wrapper">
				<header>
					<div className="switch-theme">
						<span className="switch-theme__button" onClick={handleThemeSwitch}>
							{isLightTheme ? <IoSunny size={24} /> : <IoMoon size={24} />}
						</span>
					</div>
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
			</div>
        </div>
	
    );
}

export default Layout;