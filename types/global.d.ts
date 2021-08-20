interface MetaInfo {
	tag: string;
	name: string;
	age: number;
	prof: string;
	location: string;
}

interface Image {
	src: string;
	alt?: string;
}

interface ExperienceItem {
	img?: Image;
	title: string;
	durationStart?: string;
	durationEnd?: string;
	description: string;
}

interface SkillSectionData {
	title: string;
	skills: SkillItem[];
}

interface SkillItem {
	name: string;
	img?: Image;
	subtitle?: string;
	description?: string;
	href?: string;
}

type I18n = (key: string) => string;

interface LocalesDictionary {
	[key: string]: LocalesDictionary | { [key: Locales]: string };
}