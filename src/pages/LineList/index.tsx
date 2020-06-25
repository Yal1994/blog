import * as React from 'react';
import { Skeleton, Button } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './index.less'
import logo from '@/assets/images/avatar.jpg';


interface ILineListProps {}

interface IArticle {
    _id:string,
    createtime:string,
    title:string,
    desc:string,
    pics:string[],
}

interface IArticleList {
    count: number;
    articles:IArticle[],
}

const LineList: React.FunctionComponent<ILineListProps> = (props) => {
	const [size, setSize] = React.useState(15);
	const [articleList, setArticleList] = React.useState<IArticleList>({
        count:1,
        articles:[{
            _id:'1',
            createtime:'2020-06-25',
            title:'博客出生了',
            desc:'博客前台开发完毕',
            pics:[logo]
        }]
    } );
    
	const getMore = () => {
		console.log('getMore');
	};
	const loadmore = (
		<div style={{ textAlign: 'center' }}>
			<Button onClick={getMore}>加载更多</Button>
		</div>
	);

	const listhtml = (
		<div>
			{articleList.articles.map((v: any) => (
				<div className="artical" key={v._id}>
					<div className="dotts"></div>
					<Link className="date" to={`/detail?id=${v._id}`}>
						<span className="trig"></span>
						<span className="dates">
							{moment(v.createtime).format('YYYY.MM.DD')}
						</span>
					</Link>
					<div className="art-container">
						<div className="line"></div>
						<div className="art-content">
							<p className="art-title">
								<Link to={`/detail?id=${v._id}`}>{v.title}</Link>
							</p>
							{v.pics && v.pics.length > 0 ? (
								<div className="art-img">
									<img src={v.pics[0]} alt="文章配图" />
								</div>
							) : null}
							<div className="art-detail">
								<p>{v.desc}</p>
							</div>
						</div>
					</div>
				</div>
			))}
			{articleList.articles.length < articleList.count ? loadmore : null}
		</div>
	);
	const none = <Skeleton active />;
	return (
		<div className="Artical-box">{articleList.articles.length === 0 ? none : listhtml}</div>
	);
};

export default LineList;
