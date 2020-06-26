interface IOpenSourceProject {
	name: string;
	desc: string;
	github: string;
	gitee: string;
	url: string;
}
interface IProject {
	duty: string;
	desc: string;
	content: string;
	point: string;
}
interface IExperience {
	start: string;
	end: string;
	company: string;
	position: string;
	duties: string[];
	projects: IProject[];
}
interface IResume {
	city: string;
	expectCity: string;
	expectPosition: string;
	position: string;
	yearOfWork: number;
	phone: string;
	email: string;
	site: string;
	name: string;
	born: number;
	gender: '男' | '女';
	school: string;
	major: string;
	education: string;
	osProjects: IOpenSourceProject[];
	skills: string[];
	experiences: IExperience[];
	github: string;
	status: string;
	gitee: string;
}

const myResume: IResume = {
	status: '',
	city: '',
	expectCity: '',
	expectPosition: '',
	position: '',
	yearOfWork: 3,
	name: '',
	phone: '',
	email: '@foxmail.com',
	site: 'www..cn',
	github: 'https://github.com/Yal1994',
	gitee: 'https://gitee.com/cnylgit',
	born: 1994,
	gender: '男',
	school: '',
	major: '',
	education: '',
	osProjects: [
		{
			name: '个人博客',
			desc:
				'基于React，React-Router，AntDesign，TypeScript构建的个人博客，包含个人信息、笔记、评论、点赞功能',
			github: '',
			gitee: '',
			url: '',
		},
		{
			name: '抖音助手',
			desc:
				'基于Java8，JavaFX，SpringBoot，Maven，FFMpeg构建的抖音视频下载助手，包含抖音短视频信息解析、短视频去水印、(批量)下载、短视频拼接等功能',
			github: '',
			gitee: '',
			url: '',
		},
		{
			name: '吸猫小程序',
			desc:
				'基于ColorUI,微信小程序API构建的仿微博微信小程序，专注于猫咪相关博文，含点赞、评论、收藏、即时聊天等功能',
			github: '',
			gitee: '',
			url: '',
		},
		{
			name: '吸猫小程序服务端',
			desc: '基于Java8，SpringBoot，JPA，MySQL构建的服务端',
			github: '',
			gitee: '',
			url: '',
		},
	],
	skills: [],
	experiences: [],
};

export default myResume;
