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
	gitee: string;
	status: string;
}

const myResume: IResume = {
	status: '在职',
	city: '珠海',
	expectCity: '珠海',
	expectPosition: '高级Web开发工程师',
	position: '开发工程师',
	yearOfWork: 3,
	name: '颜浪',
	phone: '点击查看',
	email: 'scottyan@foxmail.com',
	site: 'www.uzivn.cn',
	github: 'https://github.com/Yal1994',
	gitee: 'https://gitee.com/cnylgit',
	born: 1994,
	gender: '男',
	school: '南方医科大学',
	major: '生物医学工程',
	education: '本科',
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
	skills: [
		'熟练掌握Java基础',
		'熟悉JVM内存模型及JVM性能调优',
		'熟悉微服务架构，熟练掌握Spring、SpringBoot、SpringCloud、Hibernate、JPA等框架',
		'熟悉Redis、MongoDB、ElasticSearch等中间件',
		'熟练掌握MySQL及SQL优化',
		'熟练使用Go语言及Gin、XORM框架',
		'前端熟练使用React进行组件化开发',
		'熟练使用Redux、React-Router',
		'熟练使用微信小程序API及小程序开发',
		'能独立完成项目部署及前后端开发',
	],
	experiences: [
		{
			start: '2016年10月',
			end: '2017年1月',
			company: '广州景心科技有限公司',
			position: 'Java开发实习生',
			duties: ['协助开发工程师完成项目功能'],
			projects: [
				{
					duty: '后端功能开发',
					desc: '微信端H5转盘抽奖小游戏',
					content:
						'使用SVN协作，服务端基于Java7、SpringMVC、Hibernate、MySQL构建的项目',
					point: '实战项目学习，项目协作学习',
				},
			],
		},
		{
			start: '2017年7月',
			end: '2019年4月',
			company: '广东亿迅科技有限公司',
			position: 'Java开发工程师',
			duties: ['完成项目功能开发及项目维护'],
			projects: [
				{
					duty: '功能开发、项目维护',
					desc: '中国电信集中MSS项目财辅报账系统',
					content:
						'该系统在全国五十多个省份的电信内部使用，基于Java、Spring、Struts、Hibernate、Oracle、JSP构建的B/S项目',
					point: '完成新功能开发及系统维护',
				},
			],
		},
		{
			start: '2019年9月',
			end: '至今',
			company: '武汉烽火信息集成有限公司',
			position: '开发工程师',
			duties: ['Golang开发', 'Java开发', '前端开发'],
			projects: [
				{
					desc: '公文管理系统',
					duty: '前台前端开发、管理后台流程编辑器开发',
					content:
						'项目前台提供发起公文功能，管理后台提供工作流流程模板编辑功能，前端使用React、AntDesignPro开发',
					point:
						'独立完成基于AntDesignPro的用户前台项目构建，及基于AntD G6的后台管理系统中流程模板管理模块',
				},
				{
					desc: '政务微信通讯录组件',
					duty: '后端功能开发',
					content:
						'项目提供一个可集成到政务微信的H5组件，组件功能为通讯录，前端使用React、AntDesignMobile、webpack开发、后端使用Golang开发',
					point: '完成后端通讯录分组及部门相关接口开发',
				},
				{
					desc: '移动打印系统',
					duty: '前端功能开发、Golang后端开发、打印机驱动安装及管理',
					content:
						'项目是一个提供打印机管理，云端发起打印，打印任务管理等功能的移动端组件，前端使用React、Axios、AntDesignMobile、webpack构建H5组件，后端使用Golang开发',
					point:
						'参与前端项目框架构建，需求分析，及后台管理系统前端核心功能开发。',
				},
				{
					desc: '政务协同开发平台后台管理系统',
					duty: '前端功能开发',
					content:
						'项目提供一个第三方应用接入并统一管理的集成系统，后台管理系统主要使用React、Redux、AntD、Umi-Request、Axios等框架构建',
					point: '参与项目框架构建，需求分析，及后台管理系统前端核心功能开发。',
				},
				{
					desc: 'ZHJYAFPT',
					duty: '项目实施',
					content: 'AF平台',
					point: '快速适应环境，并掌握项目主要功能并对已实施项目进行升级更新。',
				},
			],
		},
	],
};

export default myResume;
