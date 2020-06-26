import * as React from 'react';
import { Avatar, BackTop, Row, Col } from 'antd';
import RouterLayout from '../routerLayout';
import './index.less'
import avatar from '@/assets/images/avatar.jpg';
import ResumeContent from './content';

interface IResumeProps {}

const Resume: React.FunctionComponent<IResumeProps> = (props) => {
	return (
        <RouterLayout>
		<div className={'contentBody'}>
			<Row justify={'center'}>
				<Col>
					<Avatar src={avatar} size={100}></Avatar>
				</Col>
			</Row>
			<Row justify={'center'}>
				<Col>
					<p className={'appNickName'}>星轩·Yal</p>
				</Col>
			</Row>
			<Row justify={'center'}>
				<Col>
                <ResumeContent></ResumeContent>
				</Col>
			</Row>
			<BackTop />
		</div>
		</RouterLayout>
	);
};

export default Resume;
