import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProjectPageProps {
}

const ProjectPage: React.FunctionComponent<IProjectPageProps> = (props) => {
  return (
      <>
      ProjectPage
      <Link to={'/'}>main</Link>
      </>
  );
};

export default ProjectPage;
