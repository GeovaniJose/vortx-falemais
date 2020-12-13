import React, { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Modal from '../Modal';

import { Container, Content, Menu } from './styles';

const Header: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const location = useLocation();

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  return (
    <Container>
      <Content>
        <Modal isOpen={modalOpen} setIsOpen={toggleModal} />

        <Link to="/">
          <h1>VxTel</h1>
        </Link>

        <Menu currentPath={location.pathname}>
          <button type="button" onClick={toggleModal}>
            Tabela de Preços
          </button>
          <Link to="/historic">Histórico</Link>
        </Menu>
      </Content>
    </Container>
  );
};

export default Header;
