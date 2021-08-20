import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';
import ExperienceList from '../ExperienceList';
import SkillsGrid from '../SkillsGrid';

interface ResumeInfoProps {
	bio: string;
	experience: ExperienceItem[];
	skillSections: SkillSectionData[];
}

const initialState = { opacity: 0, y: -10 };
const animatedState = { opacity: 1, y: 0 };

function transition(index: number) {
	return { duration: 0.4, delay: 0.4 * index };
}

const ResumeInfo: React.FC<ResumeInfoProps> = ({ bio, experience, skillSections }) => {
	const i18n = useI18n();

	return (
		<section className="resume-info">
			<motion.div initial={initialState} animate={animatedState} transition={transition(0)}>
				<div className="resume-info__about">
					<h2 className="resume-info__sec-title">{i18n('resume_info.about_title')}</h2>
					<p className="resume-info__bio">{bio}</p>
				</div>
			</motion.div>

			<motion.div initial={initialState} animate={animatedState} transition={transition(1)}>
				<div className="resume-info__exp">
					<h2 className="resume-info__sec-title">{i18n('resume_info.experience_title')}</h2>
					<ExperienceList items={experience} />
				</div>
			</motion.div>

			{skillSections.map((section, index) => (
				<motion.div key={index} initial={initialState} animate={animatedState} transition={transition(index + 2)}>
					<div className="resume-info__skills-section">
						<h2 className="resume-info__sec-title">{section.title}</h2>
						<SkillsGrid items={section.skills} />
					</div>
				</motion.div>
			))}
		</section>
	);
}

export default ResumeInfo;