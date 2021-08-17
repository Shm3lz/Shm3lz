import ExperienceList from '../ExperienceList';
import SkillsGrid from '../SkillsGrid';

interface ResumeInfoProps {
	bio: string;
	experience: ExperienceItem[];
	skillSections: SkillSectionData[];
}

const ResumeInfo: React.FC<ResumeInfoProps> = ({ bio, experience, skillSections }) => {
	return (
		<section className="resume-info">
			<div className="resume-info__about">
				<h2 className="resume-info__sec-title">About</h2>
				<p className="resume-info__bio">{bio}</p>
			</div>

			<div className="resume-info__exp">
				<h2 className="resume-info__sec-title">Experience</h2>
				<ExperienceList items={experience} />
			</div>

			{skillSections.map((section, index) => (
				<div className="resume-info__skills-section" key={index}>
					<h2 className="resume-info__sec-title">{section.title}</h2>
					<SkillsGrid items={section.skills} />
				</div>
			))}
		</section>
	);
}

export default ResumeInfo;