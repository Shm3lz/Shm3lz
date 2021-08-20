import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { I18nProvider } from '../i18n';
import { Locales } from '../i18n/locales';

function Hajimeru({ Component, pageProps }: AppProps) {
  return (
	  <I18nProvider locale={pageProps.locale || Locales.RU}>
		  <Layout>
			<Component {...pageProps} />
		</Layout>
	  </I18nProvider>
	);
}
export default Hajimeru;
