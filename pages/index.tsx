import { GetStaticProps } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';

import { WithI18nProps } from '../i18n';
import Resume, { ResumeProps } from '../components/Resume';
import { Locales } from '../i18n/locales';


export default function Index(props: ResumeProps) {
	return (
		<>
			<Head>
				<title>Shm3lz</title>
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Resume {...props} />
		</>
	);
}

export const getStaticProps: GetStaticProps<WithI18nProps<ResumeProps>> = async ({ locale }) => {
	const response = fs.readFileSync(path.join(process.cwd(), `public/content.${locale}.json`));
	const { meta, bio, experience, skillsSections } = JSON.parse(response as unknown as string);
	return {
		props: {
			meta, bio,
			experience,
			skills: skillsSections,
			locale: locale as Locales || Locales.RU,
		}
	}	
}