import React from 'react';
import avatar from '@/assets/images/avatar.jpg';
import { Avatar, Row, Col, BackTop } from 'antd';
import './index.less';
import { Link } from 'react-router-dom';
import Separator from '@/components/Separator';
import { newGuid } from '@/utils/utils';
import BlogHistoryList from '../BlogHistoryList';
import RouteList from '@/router/router';
import { IRoute } from '@/entity/entity';

const Home: React.FC = () => {
	return (
		<div className={'contentBody'}>
			<Row justify={'center'}>
				<Col>
					<Avatar src={avatar} size={150}></Avatar>
				</Col>
			</Row>
			<Row justify={'center'}>
				<Col>
					<p className={'appNickName'}>星轩·Yal</p>
				</Col>
			</Row>
			<Row justify={'center'} gutter={4} style={{margin:0}}>
				{RouteList.map((m: IRoute) => {
					if(m.isMenu){
						return (
							<Col key={newGuid()}>
								<Link className={'AppLink'} to={m.path} target={m.target}>
									{m.title}
								</Link>
							</Col>
						);
					}
				})}
			</Row>
			<Separator />
			<Row justify={'center'}>
				<Col>
					<BlogHistoryList></BlogHistoryList>
				</Col>
			</Row>
			<BackTop />
		</div>
		
	);
};

export default Home;
