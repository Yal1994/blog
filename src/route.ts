import Home from './pages/home';
import ArticleList from './pages/articleList';
import Detail from './pages/ArticleItem';
import { IRoute } from './entity/entity';
import Resume from './pages/resume';

const RouteList: IRoute[] = [
	{
		title: '首页',
		path: '/',
		exact:true,
		isMenu:true,
		component:Home,
	},
	{
		title: '笔记',
		path: '/article',
		exact:true,
		isMenu:true,
		component:ArticleList,
	},
	{
		title: '简历',
		path: '/resume',
		exact:true,
		isMenu:true,
		component:Resume,
	},
	{
		title: '文章',
		path: '/article/:id',
		exact:false,
		component: Detail
	},
	// {
	// 	title: '简历',
	// 	path: '/pages/resume',
	// },
	// {
	// 	title: '404',
	// 	path: '/pages/404',
	// },
	// {
	// 	title: '500',
	// 	path: '/pages/500',
	// },
];

export default RouteList;
