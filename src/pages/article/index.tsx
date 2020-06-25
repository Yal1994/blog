import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import styles from './index.module.less'
const { Header, Footer, Sider, Content } = Layout;

export interface IArticlePageProps {}

export default function ArticlePage(props: IArticlePageProps) {
	return (
		<div className={styles.contentBody}>
			<Link to={'/'}>main</Link>
			<Layout>
				<Header></Header>
				<Layout>
					<Sider theme={'light'}>sider</Sider>
					<Content>content</Content>
					<Sider theme={'light'}>left siders</Sider>
				</Layout>
				<Footer>
          @Yal
        </Footer>
			</Layout>
		</div>
	);
}
