import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Valores default para estado inicial
  mode: 'dark',
  userId: '63701cc1f03239b7f700000e',
};

export const globalSlice = createSlice({
  name: 'global', // id para a slice, identificação, nomea o objeto
  initialState, //declara qual o estado inicial, o que deve ser alterado
  reducers: {
    // funções de ação
    setMode: (state) => {
      // função setMode que recebe o estado como argumento e retorna o seu oposto
      state.mode = state.mode === 'light' ? 'dark' : 'light'; // o estado da variavel MODE é light? Então agora é dark, se não, muda pro light
    },
  },
});

export const { setMode } = globalSlice.actions; // este envia as funções capazes de alterar o estado

export default globalSlice.reducer; // reducer do slice envia os estados default, variaveis dos estados, uma maneira de diferencialos e idetificalos
