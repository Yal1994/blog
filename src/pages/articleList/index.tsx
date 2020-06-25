import * as React from 'react';
import { List, Space, BackTop } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


interface IArticleListProps {

}

interface IArtItem{
  id:string,
  title:string
  desc:string
  createTime:string
  view:number
  comment:number
  like:number
  content:string
  pics:string[]
}

const fakeArts:IArtItem[] = [
  {
    id:'1',
    title:'React AntD Blog Example',
    desc:'this is a Blog which for practice Use React And AntDesign',
    createTime:'2020-06-25',
    view:0,
    comment:0,
    like:0,
    content:'his is a Blog which for practice Use React And AntDesignhis is a Blog which for practice Use React And AntDesign',
    pics:['/logo.png']
  },
  {
    id:'2',
    title:'React AntD Blog Example',
    desc:'this is a Blog which for practice Use React And AntDesign',
    createTime:'2020-06-25',
    view:0,
    comment:0,
    like:0,
    content:'his is a Blog which for practice Use React And AntDesignhis is a Blog which for practice Use React And AntDesign',
    pics:['/logo.png']
  },
  {
    id:'3',
    title:'React AntD Blog Example',
    desc:'this is a Blog which for practice Use React And AntDesign',
    createTime:'2020-06-25',
    view:0,
    comment:0,
    like:0,
    content:'his is a Blog which for practice Use React And AntDesignhis is a Blog which for practice Use React And AntDesign',
    pics:['/logo.png']
  }
]

const IconText = ({ icon, text }:any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ArticleList: React.FunctionComponent<IArticleListProps> = (props) => {
  return (
      <>
      <List
      itemLayout='vertical'
      size='large'
      dataSource={fakeArts}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText icon={StarOutlined} text={item.view} key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text={item.like} key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text={item.comment} key="list-vertical-message" />,
            <span>{item.createTime}</span>
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src={item.pics[0]}
            />
          }
        >
          <List.Item.Meta
            title={item.title}
          >

          </List.Item.Meta>
          {item.content}
        </List.Item>
      )}
      >
      </List>
      <BackTop />
      </>
  );
};

export default ArticleList;
