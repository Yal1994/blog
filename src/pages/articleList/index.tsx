import * as React from 'react';
import { List, Space, BackTop, Typography } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import RouterLayout from '../routerLayout';

interface IArticleListProps {}

interface IArtItem {
	id: string;
	title: string;
	desc: string;
	createTime: string;
	view: number;
	comment: number;
	like: number;
	content: string;
	pics: string[];
}

const fakeArts: IArtItem[] = [
	{
		id: '1',
		title: 'React AntD Blog Example',
		desc: 'this is a Blog which for practice Use React And AntDesign',
		createTime: '2020-06-25',
		view: 0,
		comment: 0,
		like: 0,
		content:
			'his is a Blog which for practice Use React And AntDesignhis is a Blog which for practice Use React And AntDesign',
		pics: ['/logo.png'],
	},
	{
		id: '2',
		title: 'React AntD Blog Example',
		desc: 'this is a Blog which for practice Use React And AntDesign',
		createTime: '2020-06-25',
		view: 0,
		comment: 0,
		like: 0,
		content:
			'this is a Blog which for practice Use React And AntDesignhis is a Blog which for practice Use React And AntDesign',
		pics: ['/logo.png'],
	},
	{
		id: '3',
		title: 'React AntD Blog Example',
		desc: 'this is a Blog which for practice Use React And AntDesign',
		createTime: '2020-06-25',
		view: 0,
		comment: 0,
		like: 0,
		content:
			'this is a Blog which for practice Use React And AntDesignhis is a Blog which for practice Use React And AntDesign',
		pics: ['/logo.png'],
	},
];

const IconText = ({ icon, text }: any) => (
	<Space>
		{React.createElement(icon)}
		{text}
	</Space>
);

const ArticleList: React.FunctionComponent<IArticleListProps> = (props) => {
	const onLikeClick = (e: React.MouseEvent, id: string) => {
		console.log(e);
	};
	return (
		<RouterLayout>
			<List
				itemLayout="vertical"
				size="large"
				dataSource={fakeArts}
				renderItem={(item) => (
					<List.Item
						key={item.id}
						actions={[
							<IconText
								icon={StarOutlined}
								text={item.view}
								key="list-vertical-star-o"
							/>,

							<div onClick={(e) => onLikeClick(e, item.id)}>
								<IconText
									icon={LikeOutlined}
									text={item.like}
									key="list-vertical-like-o"
								/>
							</div>,
							<IconText
								icon={MessageOutlined}
								text={item.comment}
								key="list-vertical-message"
							/>,
							<span>{item.createTime}</span>,
						]}
						extra={
							<Link to={'/article/' + item.id}>
								<img width={272} alt="logo" src={item.pics[0]} />
							</Link>
						}
					>
						<Link to={'/article/' + item.id}>
							<List.Item.Meta title={item.title}></List.Item.Meta>
						</Link>
						<Link style={{ color: 'black' }} to={'/article/' + item.id}>
							<Typography.Paragraph ellipsis={{ rows: 2 }}>
								{item.content}
							</Typography.Paragraph>
						</Link>
					</List.Item>
				)}
			></List>
			<BackTop />
		</RouterLayout>
	);
};

export default ArticleList;
