import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import logoImg from '../../assets/github-explorer-logo.svg';

import { Header } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <h1>{params.repository}</h1>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
    </>
  );
};
export default Repository;
