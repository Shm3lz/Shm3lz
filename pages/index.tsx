import Resume, { ResumeProps } from '../components/Resume';

export default function Index(props: ResumeProps) {
	return (
		<Resume {...props} />
	);
}

export async function getStaticProps() {
	const response = await fetch('http://localhost:3000/schema.json');
	// console.log(await response.json());
	const { meta, bio, experience, skillsSections } = await response.json();

	return {
		props: {
			meta,
			bio,
			experience,
			skills: skillsSections,
		}
	}	
}