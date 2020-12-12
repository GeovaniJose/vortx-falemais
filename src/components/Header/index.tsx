import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Container, Content, Menu } from './styles';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <Content>
        <Link to="/">
          <h1>VxTel</h1>
        </Link>

        <Menu currentPath={location.pathname}>
          <button type="button">Tabela de Preços</button>
          <Link to="/historic">Histórico</Link>
        </Menu>
      </Content>
    </Container>
  );
};

export default Header;
