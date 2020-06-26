import * as React from 'react';
import {Layout} from 'antd'
import styles from './index.module.less'
import { IMenu, menus } from '../home';
import { Link } from 'react-router-dom';
import Search from 'antd/lib/input/Search';
import RouteList from '@/route';
import { IRoute } from '@/entity/entity';

const {Header} = Layout
interface INavProps {
}

const Nav: React.FunctionComponent<INavProps> = (props) => {
  return (
      <>
      <Header
				className={styles.cusHeader}
				style={{ background: 'white' }}
			>
				<div>
					<img
						className={styles.headerLogo}
						src={'/logo.png'}
						style={{
							maxHeight: '100%',
							maxWidth: '100%',
							verticalAlign: 'top',
							borderRadius: '10px',
						}}
					></img>
				</div>
				{RouteList.map((item: IRoute, i: any) => {
					if(item.isMenu){
						return (
							<Link
								className={styles.cusMenuItem}
								to={item.path}
								target={item.target}
								key={item.path}
							>
								{item.title}
							</Link>
						);
					}
				})}
				<div style={{ width: '20%', float: 'right' }}>
					<Search
						style={{ width: '100%' }}
						placeholder="搜索文章/项目"
						size="middle"
						onSearch={(value) => console.log(value)}
					/>
				</div>
			</Header>
      </>
  );
};

export default Nav;
