import * as React from 'react';
import { Typography, Row, Col } from 'antd';
import Title from 'antd/lib/typography/Title';
import IArticle from '@/entity/entity';
import Paragraph from 'antd/lib/typography/Paragraph';
import Separator from '@/components/Separator';
import RouterLayout from '../routerLayout';

interface IArticleItemProps {
  article?:IArticle
}

const Detail: React.FunctionComponent<IArticleItemProps> = (props) => {
 // const {article} = props 
  const fakeArt:IArticle = 
    {
      _id: '3',
      title: 'React AntD Blog Example',
      createTime: '2020-06-25',
      views: 0,
      like: 0,
      content:
        'this is a Blog which for practice Use React And AntDesignhis is a Blog which for practice Use React And AntDesign',
      pics: ['/logo.png'],
  }

  const article = fakeArt
  const getContent = () => {
    return {
      __html:article.content
    }
  }
  return (
      <RouterLayout>
      <Typography>
          <Title>{article.title}</Title>
          <Row>
            <Col span={20}>
              <span>{article.createTime}</span>
            </Col>
          </Row>
          <Paragraph>
            <div dangerouslySetInnerHTML={getContent()}></div>
          </Paragraph>
      </Typography>
      <Separator></Separator>
      </RouterLayout>
  );
};

export default Detail;
