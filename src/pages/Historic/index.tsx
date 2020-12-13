import React, { useCallback } from 'react';

import { useHistoric } from '../../hooks/historic';
import formatValue from '../../utils/formatValue';

import Header from '../../components/Header';

import { Container, Content, Table } from './styles';

const Historic: React.FC = () => {
  const { historic } = useHistoric();

  const formattedPrices = useCallback(
    price => (price >= 0 ? formatValue(price) : '-'),
    [],
  );

  return (
    <Container>
      <Header />

      <Content>
        <h1>Histórico de cálculos</h1>

        <Table>
          <thead>
            <tr>
              <th>Origem</th>
              <th>Destino</th>
              <th>Tempo</th>
              <th>Plano</th>
              <th>Sem FaleMais</th>
              <th>Com FaleMais</th>
            </tr>
          </thead>
          <tbody>
            {historic
              .slice(0)
              .reverse()
              .map(hist => (
                <tr key={hist.id}>
                  <td>{hist.origem}</td>
                  <td>{hist.destino}</td>
                  <td>{hist.tempo}</td>
                  <td>{hist.plano}</td>
                  <td>{formattedPrices(hist.price)}</td>
                  <td>{formattedPrices(hist.priceDiscount)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};

export default Historic;
