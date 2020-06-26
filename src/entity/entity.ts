interface IArticle {
	_id: string;
	title: string;
	content: string;
	views: number;
	like: number;
    pics: string[];
    createTime: string;
}

export interface IRoute {
	title: string;
	path: string;
	exact?:boolean;
	target?: string;
	isMenu?:boolean;
	component:any;
}

export default IArticle;
