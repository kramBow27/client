import { CssBaseline, ThemeProvider } from '@mui/material'; //CSSBASE: ADICIONA CORREÇÕES AO BROWSER THEMEPROVIDER: TEMA E TUDO QUE POSSA ESTAR DENTRO DO TEMA
import { createTheme } from '@mui/material/styles'; // cria o tema
import { useMemo } from 'react'; // ARMAZENA E RETORNA VALORES/INFORMAÇÕES COMO "MEMÓRIAS"
import { useSelector } from 'react-redux'; // PERMITE SWITCH ENTRE STATES/EFFECTS
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { themeSettings } from 'theme'; //função que utiliza como argumento a array com as respectivas configurações de tema
import Layout from 'scenes/layout'; //IMPORTE DAS CENAS, PAGINAS, TELAS, COMO ELEMENTOS REACT
import Dashboard from 'scenes/dashboard';
import Products from 'scenes/products';
import Customers from 'scenes/customers';

function App() {
  // CRIA A PÁGINA COMO UM FUNÇÃO // "ONDE OS ESTADOS SAO ALTERADOS"
  const mode = useSelector((state) => state.global.mode); //ARMAZENA INFORMAÇÃO DEFAULT AO MODO
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); //ARMAZENA INFORMAÇAO DA CRIAÇÃO DO TEMA UTILIZANDO A FUNÇÃO DE BUSCA DO MODO COMO ARGUMENTO
  return (
    // RETORNA A APLICAÇÃO
    <div className="app">
      <BrowserRouter>
        {' '}
        {/*MANTEM A PAGINA EM SINCRONIA COM O BROWSER*/}
        <ThemeProvider theme={theme}>
          {' '}
          {/*A PAGINA INTEIRA É ENVELOPADA NO THEME PROVIDER PORQUE NESSE CASO A ALTERAÇÃO DE TEMA É REALIZADA EM CIMA DE TODOS OS ITENS DA PÁGINA*/}
          <CssBaseline />{' '}
          {/*ELEMENTO 'INVISIVEL' MAS QUE AJUSTA O BROWSER PARA UM COMPORTAMENTO PADRONIZADO DOS ELEMENTOS8*/}
          <Routes>
            {' '}
            {/*QUAIS ROTAS?*/}
            <Route element={<Layout />}>
              {' '}
              {/*LAYOUT GERAL PADRÃO ENVELOPA O QUE FOR DINAMICO*/}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
