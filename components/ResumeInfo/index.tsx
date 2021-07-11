import ExperienceList from '../ExperienceList';
import SkillsGrid from '../SkillsGrid';

const ResumeInfo: React.FC = () => {
	return (
		<section className="resume-info">
			<div className="resume-info__about" id="about">
				<h2 className="resume-info__sec-title">About</h2>
				<p className="resume-info__bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo unde, voluptate quis natus vel, fugiat sit laudantium reprehenderit maiores, delectus dolores? Veniam officia voluptatem minima a temporibus quidem quaerat quae?</p>
			</div>

			<div className="resume-info__exp" id="exp">
				<h2 className="resume-info__sec-title">Experience</h2>
				<ExperienceList />
			</div>

			<div className="resume-info__primary-skills" id="skills">
				<h2 className="resume-info__sec-title">Primary skills</h2>
				<SkillsGrid />
			</div>

			<div className="resume-info__other-skills">
				<h2 className="resume-info__sec-title">Other skills</h2>
				<SkillsGrid />
			</div>
		</section>
	);
}

export default ResumeInfo;