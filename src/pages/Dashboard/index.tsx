import React, { useCallback, useMemo, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log(formRef);
  }, []);

  const selectOptions = useMemo(
    () => [
      { value: 'faleMais30', label: 'Fale Mais 30' },
      { value: 'faleMais60', label: 'Fale Mais 60' },
      { value: 'faleMais120', label: 'Fale Mais 120' },
    ],
    [],
  );

  return (
    <Container>
      <Header />

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Calcule o valor da sua ligação</h1>

          <Input
            name="origem"
            labelText="DDD de origem"
            placeholder="Ex: 011"
          />

          <Input
            name="destino"
            labelText="DDD de destino"
            placeholder="Ex: 016"
          />

          <Input
            name="tempo"
            labelText="Tempo de ligação (em minutos)"
            placeholder="Ex: 60"
          />

          <Select
            name="plan"
            defaultValue={selectOptions[0]}
            options={selectOptions}
            labelText="Plano"
          />
          <Button type="submit">Calcular</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Dashboard;
