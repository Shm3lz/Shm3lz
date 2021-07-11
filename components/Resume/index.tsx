import ResumeInfo from '../ResumeInfo';
import ResumeSummarySection from '../ResumeSummarySection';

interface ExperienceItem {
	name: string;
	img: string;
	start: string;
	end: string;
}

interface SkillSubSection {
	name: string;
	img: string;
	duraction: string;
}

export interface ResumeProps {
	bio?: string;
	expirience?: Array<ExperienceItem>;
	skills?: Array<SkillSubSection>
}

const Resume: React.FC<ResumeProps> = ({ bio, expirience, skills }) => {
	return (
		<div className="resume">
			<section className="resume__meta">
				<ResumeSummarySection />
			</section>
			<section className="resume__main">
				<ResumeInfo />
			</section>
		</div>
	);
}

export default Resume;