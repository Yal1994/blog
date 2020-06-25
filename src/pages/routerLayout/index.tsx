import styles from './index.module.less';
import Nav from '../nav';
import React, { useEffect, useState } from 'react';
import { Layout, Row, Col } from 'antd';
import Home from '../home';
const { Footer, Content, Header } = Layout;

export interface IArticlePageProps {
	location?: string;
	children: React.ReactNode;
	left?: React.ReactNode;
	right?: React.ReactNode;
}
const RouterLayout: React.FunctionComponent<IArticlePageProps> = (props) => {
	return (
		<Layout>
			<Nav></Nav>
			<Content className={styles.siteLayout} style={{ marginTop: 64 }}>
				<div
					className={styles.siteLayoutBackground}
					style={{ padding: 24, minHeight: '79vh' }}
				>
					<Row>
						<Col span={3}>{props.left}</Col>
						<Col span={14}>{props.children}</Col>
						<Col span={4}>{props.right}</Col>
					</Row>
				</div>
			</Content>
			<Footer
				className={styles.cusFooter}
				style={{ textAlign: 'center', backgroundColor: 'white' }}
			>
				星轩 · @ 2020
			</Footer>
		</Layout>
	)
};

export default RouterLayout;
