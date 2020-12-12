import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 } from 'uuid';

interface Historic {
  id: string;
  origem: number;
  destino: number;
  tempo: number;
  plano: string;
  price: number;
  priceDiscount: number;
}

interface HistoricContextData {
  historic: Historic[];
  addHistoric(item: Omit<Historic, 'id' | 'price' | 'priceDiscount'>): void;
}

const tariff: any = {
  11: {
    16: 1.9,
    17: 1.7,
    18: 0.9,
  },
  16: { 11: 2.9 },
  17: { 11: 2.7 },
  18: { 11: 1.9 },
};

const HistoricContext = createContext<HistoricContextData>(
  {} as HistoricContextData,
);

export const HistoricProvider: React.FC = ({ children }) => {
  const [historic, setHistoric] = useState<Historic[]>(() => {
    const storagedHistoric = localStorage.getItem('@FaleMais:historic');

    if (storagedHistoric) {
      return [...JSON.parse(storagedHistoric)];
    }

    return [];
  });

  const calculateDiscount = useCallback((overTime, tarifa) => {
    return overTime > 0 ? overTime * tarifa + 0.1 * overTime * tarifa : 0;
  }, []);

  const addHistoric = useCallback(
    ({
      origem,
      destino,
      tempo,
      plano,
    }: Omit<Historic, 'id' | 'price' | 'priceDiscount'>) => {
      const id = v4();

      let price = -1;
      let priceDiscount = -1;

      const tarifa = tariff[+origem] ? tariff[+origem][+destino] : 0;

      if (tarifa) {
        price = tempo * tarifa;

        switch (plano) {
          case 'FaleMais 30':
            priceDiscount = calculateDiscount(tempo - 30, tarifa);
            break;
          case 'FaleMais 60':
            priceDiscount = calculateDiscount(tempo - 60, tarifa);
            break;
          case 'FaleMais 120':
            priceDiscount = calculateDiscount(tempo - 120, tarifa);
            break;
          default:
            break;
        }
      }

      const hist = {
        id,
        origem,
        destino,
        tempo,
        plano,
        price,
        priceDiscount,
      };

      const newHistoric = [...historic, hist];

      setHistoric(newHistoric);
      localStorage.setItem('@FaleMais:historic', JSON.stringify(newHistoric));
    },
    [historic, calculateDiscount],
  );

  const value = React.useMemo(() => ({ historic, addHistoric }), [
    historic,
    addHistoric,
  ]);

  return (
    <HistoricContext.Provider value={value}>
      {children}
    </HistoricContext.Provider>
  );
};

export function useHistoric(): HistoricContextData {
  const context = useContext(HistoricContext);

  if (!context) {
    throw new Error('The useHistoric must be used within a HistoricProvider');
  }

  return context;
}
