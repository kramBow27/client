import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from 'state'; // PEGA TODO O STATE
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from 'state/api';

const store = configureStore({
  // PONTO MAIS ALTO DE OBSERVAÇÃOS SOBRE O ARMAZENAMENTO DE DADOS, NO BANCO OU NÃO
  //Cria e configura o armazenamento(store) de estado(state)
  reducer: {
    global: globalReducer, // REDUCER PARA ESTADOS DE VARIAVEIS INTERNAS, COMO O TEMA
    [api.reducerPath]: api.reducer, // REDUCER ATRIBUIDO AO adminApi
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch); //configura o ''ouvinte'' do browser para administrar o envio/reenvio/recebimento de dados de acordo com o nivel de interação ou condição de conexão

const root = ReactDOM.createRoot(document.getElementById('root')); //apresenta a aplicação, acredito que esse seja o elo entre o JS e o HTML, via REACT
root.render(
  <React.StrictMode>
    {' '}
    {/* APONTA ERROS, BUGS*/}
    <Provider store={store}>
      {' '}
      {/*CONFIGURA DADOS "GLOBAIS" PARA TODA A APLICAÇÃO*/}
      <App /> {/*APLICAÇÃO */}
    </Provider>
  </React.StrictMode>
);
