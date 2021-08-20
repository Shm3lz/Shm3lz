import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import Resume, { ResumeProps } from '../components/Resume';


export default function Index(props: ResumeProps) {

	return (
		<Resume {...props} />
	);
}

export const getStaticProps: GetStaticProps<ResumeProps> = async ({ locale, ...etc }) => {
	const response = fs.readFileSync(path.join(process.cwd(), `public/content.${locale}.json`));
	const { meta, bio, experience, skillsSections } = JSON.parse(response as unknown as string);
	return {
		props: {
			meta, bio,
			experience,
			skills: skillsSections,
		}
	}	
}