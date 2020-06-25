interface IRoute {
	title: string;
	path: string;
    target?: string;
    component?:React.ReactNode
}
const RouteList: IRoute[] = [
	{
		title: '首页',
        path: '/',
        component:() => import('../src/pages/home')
	},
	{
		title: '文章',
        path: '/pages/article',
        component:() => import('../src/pages/articleList')
	},
	{
		title: '项目',
        path: '/pages/project',
        component:() => import('../src/pages/project')
	},
	{
		title: '简历',
		path: '/pages/resume',
	},
	{
		title: '404',
		path: '/pages/404',
	},
	{
		title: '500',
		path: '/pages/500',
	},
];

export default RouteList;
