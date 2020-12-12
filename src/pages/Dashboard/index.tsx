import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { useTransition } from 'react-spring';
import { FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';

import { useHistoric } from '../../hooks/historic';
import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

import {
  Container,
  Content,
  AnimatedForm,
  AnimatedSuccess,
  Card,
} from './styles';

interface CalculateFormData {
  origem: number;
  destino: number;
  tempo: number;
  plano: string;
}

const Dashboard: React.FC = () => {
  const { historic, addHistoric } = useHistoric();

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
    async (data: CalculateFormData) => {
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

        addHistoric(data);

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
    [formSuccess, addHistoric],
  );

  const selectOptions = useMemo(
    () => [
      { value: 'FaleMais 30', label: 'FaleMais 30' },
      { value: 'FaleMais 60', label: 'FaleMais 60' },
      { value: 'FaleMais 120', label: 'FaleMais 120' },
    ],
    [],
  );

  const successData = useMemo(() => {
    return historic[historic.length - 1];
  }, [historic]);

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
                  name="plano"
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
              <AnimatedSuccess key={key} style={props}>
                <main>
                  <Card>
                    <span>
                      Sem
                      <br />
                      FaleMais
                    </span>
                    <p>{`Origem: ${successData.origem}`}</p>
                    <p>{`Destino: ${successData.destino}`}</p>
                    <p>{`Minutos: ${successData.tempo}`}</p>
                    <strong>{`$${successData.price}`}</strong>
                  </Card>
                  <Card>
                    <span>
                      Com
                      <br />
                      FaleMais
                    </span>
                    <p>{`Origem: ${successData.origem}`}</p>
                    <p>{`Destino: ${successData.destino}`}</p>
                    <p>{`Minutos: ${successData.tempo}`}</p>
                    <p>{successData.plano}</p>
                    <strong>{`$${successData.priceDiscount}`}</strong>
                  </Card>
                </main>

                <button
                  type="button"
                  onClick={() => setFormSuccess(!formSuccess)}
                >
                  <FiArrowLeft />
                  Voltar para logon
                </button>
              </AnimatedSuccess>
            ),
        )}
      </Content>
    </Container>
  );
};

export default Dashboard;
