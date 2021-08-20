import { useContext } from 'react';
import { FC, createContext } from 'react';
import { Locales } from './locales';
import dict from './i18n.json';

const LocalesContext = createContext<I18n>(() => '');

export const I18nProvider: FC<{ locale: Locales }> = ({ children, locale }) => {
	const i18n = (key: string) => {
		const path = key.split('.');
		let value: string | LocalesDictionary = dict;

		for (key of path) {
			value = value[key];
		}

		return value[locale] as string;
	}

	return (
		<LocalesContext.Provider value={i18n}>{children}</LocalesContext.Provider>
	)
}

export const useI18n = () => useContext(LocalesContext);

export type WithI18nProps<T> = { locale: Locales } & T;