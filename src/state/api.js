import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  // We need API! -Client says
  // Fará comunicação entre dois sistemas // COOL, GONNA ASK A FEW QUESTIONS -API
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }), //WHERE? //Analise(traduz) headers e response//Define URL base, query default //  QUERY é a busca, processamento e disposição de dados
  reducerPath: 'adminApi', //WHO? //define key para o serviço de API (Comunicação entre dois sistemas diferentes) //REDUCER É CONECTADO A API ATRAVÉS DESSE
  tagTypes: [
    //WHAT??
    'User', //Subidentificações para respectivos endpoints
    'Products',
    'Customers',
    'Transactions',
    'Geography',
    'Sales',
    'Admins',
    'Performance',
    'Dashboard',
  ],
  endpoints: (build) => ({
    //WHEN?
    // O que vai ser feito? Qual os elos de comunicação?
    getUser: build.query({
      //HOW? // Constrói query em getUser, que busca/retorna uma id com a tag User no pacote
      //Constrói query para buscar e devolver informações sobre usuário(objeto)
      query: (id) => `general/user/${id}`, //define "subendereço" referente ao URL de base
      providesTags: ['User'], //
    }),
    getProducts: build.query({
      query: () => 'client/products',
      providesTags: ['Products'], // adiciona tag ao pacote
    }),
    getCustomers: build.query({
      query: () => 'client/customers', //AQUI ESTAO AS BUSCAS DE DADOS DE ACORDO
      providesTags: ['Customers'],
    }),
  }),
});

export const {
  //HERE IS YOUR SERVICE, JUST CALL BY ME "API" (IT HAS SUCCESSFULLY FETCHED DATA AND RETURNED OBJECTS)
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
} = //exporta objetos como "classe" de api
  api;
