import { motion } from 'framer-motion';

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
				<motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "easeInOut", duration: 0.4 }}>
					<ResumeSummarySection data={meta} />
				</motion.div>
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