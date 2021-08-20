import ResumeInfo from '../ResumeInfo';
import ResumeSummarySection from '../ResumeSummarySection';

export interface ResumeProps {
	meta: MetaInfo;
	bio: string;
	experience: Array<ExperienceItem>;
	skills: Array<SkillSectionData>;
}

const Resume: React.FC<ResumeProps> = ({ meta, bio, experience, skills }) => {

	return (
		<div className="resume">
			<section className="resume__meta">
				<ResumeSummarySection data={meta} />
			</section>
			<section className="resume__main">
				<ResumeInfo
					bio={bio}
					experience={experience}
					skillSections={skills}	
				/>
			</section>
		</div>
	);
}

export default Resume;