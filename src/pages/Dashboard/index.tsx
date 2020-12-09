import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-explorer-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/47276018?s=60&v=4"
          alt="Paulo D'Elia"
        />

        <div>
          <strong>paulohdelia/gobarber-gostack</strong>
          <p>Desenvolvendo o projeto durante o bootcamp GoStack</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);
export default Dashboard;
