import React from 'react';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>VxTel</h1>

        <nav>
          <button type="button">Tabela de Preços</button>
          <button type="button">Histórico</button>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
