import React from 'react';
import logo from '@/assets/images/avatar.jpg';
import { Avatar, Row, Col, BackTop } from 'antd';
import './index.less';
import { Link } from 'react-router-dom';
import Separator from '@/components/Separator';
import { newGuid } from '@/utils/utils';
import LineList from '../lineList';

export interface IMenu {
	title: string;
	path: string;
	target?: '_blank';
}

export const menus: IMenu[] = [
	{
		title: '首页',
		path: '/',
	},
	{
		title: '文章',
		path: '/article',
	},
	{
		title: 'Github',
		path: '/article',
	},
	{
		title: '简历',
		path: '/article',
	},
];
const Home: React.FC = () => {
	return (
		<div className={'contentBody'}>
			<Row justify={'center'}>
				<Col>
					<Avatar src={logo} size={150}></Avatar>
				</Col>
			</Row>
			<Row justify={'center'}>
				<Col>
					<p className={'appNickName'}>星轩·Yal</p>
				</Col>
			</Row>
			<Row justify={'center'} gutter={4} style={{margin:0}}>
				{menus.map((m: IMenu) => {
					return (
						<Col key={newGuid()}>
							<Link className={'AppLink'} to={m.path} target={m.target}>
								{m.title}
							</Link>
						</Col>
					);
				})}
			</Row>
			<Separator />
			<Row justify={'center'}>
				<Col>
					<LineList></LineList>
				</Col>
			</Row>
			<BackTop />
		</div>
		
	);
};

export default Home;
