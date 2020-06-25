import * as React from 'react';
import { Row, Col, Menu } from 'antd';
import logo from '@/assets/images/avatar.jpg';
import { Link } from 'react-router-dom';
import { menus, IMenu } from '@/pages/home';

import styles from './HeaderNav.module.less'

interface IHeaderNavProps {}

const HeaderNav: React.FunctionComponent<IHeaderNavProps> = (props) => {
	return (
		<div >
			<Row justify={'end'} align={'middle'} style={{ textAlign: 'end' }}>
				<Col span={4}>
					<img src={logo} style={{ width: '30px', height: '30px' }}></img>
				</Col>
				<Col span={20}>
					{/* <Row justify={'end'}>
						<Col span={4}>search</Col>
						<Col>
							{menus.map((item: IMenu, i: any) => {
								return (
									<Link className={styles.menuItem} to={item.path} target={item.target}>
										{item.title}
									</Link>
								);
							})}
						</Col>
					</Row> */}
                    <Menu mode={'horizontal'}>
                    {menus.map((item: IMenu, i: any) => {
								return (
									<Menu.Item key={i} >
										{item.title}
									</Menu.Item>
								);
							})}
                    </Menu>
				</Col>
			</Row>
		</div>
	);
};

export default HeaderNav;
