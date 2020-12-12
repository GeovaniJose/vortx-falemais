import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { useTransition } from 'react-spring';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { Container, Content, AnimatedForm, AnimatedSuccess } from './styles';

interface SignInFormData {
  origem: number;
  destino: number;
  tempo: number;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [formSuccess, setFormSuccess] = useState(true);

  const transitionForm = useTransition(formSuccess, null, {
    from: { opacity: 0, transform: 'translateX(-70vw)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-70vw)' },
  });

  const transitionSuccess = useTransition(!formSuccess, null, {
    from: { opacity: 0, transform: 'translateX(70vw)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(70vw)' },
  });

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          origem: Yup.number()
            .typeError('DDD de origem obrigatório')
            .required('DDD de origem obrigatório')
            .min(11, 'Digite um DDD válido')
            .max(99, 'Digite um DDD válido'),
          destino: Yup.number()
            .typeError('DDD de destino obrigatório')
            .required('DDD de destino obrigatório')
            .min(11, 'Digite um DDD válido')
            .max(99, 'Digite um DDD válido'),
          tempo: Yup.number()
            .typeError('Tempo de ligação obrigatório')
            .required('Tempo de ligação obrigatório')
            .positive('Digite um tempo de ligação válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setFormSuccess(!formSuccess);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        alert('Ocorreu um erro');
      }
    },
    [formSuccess],
  );

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
        {transitionForm.map(
          ({ item, key, props }) =>
            item && (
              <AnimatedForm
                key={key}
                ref={formRef}
                onSubmit={handleSubmit}
                style={props}
              >
                <h1>Calcule o valor da sua ligação</h1>

                <Input
                  name="origem"
                  type="number"
                  labelText="DDD de origem"
                  placeholder="Ex: 011"
                />

                <Input
                  name="destino"
                  type="number"
                  labelText="DDD de destino"
                  placeholder="Ex: 016"
                />

                <Input
                  name="tempo"
                  type="number"
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
              </AnimatedForm>
            ),
        )}
        {transitionSuccess.map(
          ({ item, key, props }) =>
            item && (
              <AnimatedSuccess
                key={key}
                style={props}
                onClick={() => setFormSuccess(!formSuccess)}
              />
            ),
        )}
      </Content>
    </Container>
  );
};

export default Dashboard;
