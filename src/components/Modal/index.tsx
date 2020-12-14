import React, { useEffect, useMemo, useState } from 'react';
import ReactModal from 'react-modal';

import formatValue from '../../utils/formatValue';

import { Table } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

interface PredefinedTariffProps {
  origem: string;
  destino: string;
  tariff: string;
}

ReactModal.setAppElement('#root');

const Modal: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  const listPredefinedTariff = useMemo<PredefinedTariffProps[]>(
    () => [
      { origem: '011', destino: '016', tariff: formatValue(1.9) },
      { origem: '016', destino: '011', tariff: formatValue(2.9) },
      { origem: '011', destino: '017', tariff: formatValue(1.7) },
      { origem: '017', destino: '011', tariff: formatValue(2.7) },
      { origem: '011', destino: '018', tariff: formatValue(0.9) },
      { origem: '018', destino: '011', tariff: formatValue(1.9) },
    ],
    [],
  );

  return (
    <ReactModal
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          inset: '30px',
          maxWidth: '720px',
          height: 'fit-content',
          margin: 'auto auto',
          padding: '40px 20px',
          border: 'none',
          borderRadius: '8px',
          textAlign: 'center',
          background: '#f4f2ed',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 90,
        },
      }}
    >
      <h1>Tabela de Preços</h1>

      <Table>
        <thead>
          <tr>
            <th>Origem</th>
            <th>Destino</th>
            <th>$/min</th>
          </tr>
        </thead>
        <tbody>
          {listPredefinedTariff.map((item, index) => (
            <tr key={index.toString()}>
              <td>{item.origem}</td>
              <td>{item.destino}</td>
              <td>{item.tariff}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ReactModal>
  );
};

export default Modal;
