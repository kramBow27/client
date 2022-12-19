import React, { useState } from 'react'; //IMPORTA REACT E USESTATE

import { Box, useMediaQuery } from '@mui/material'; //IMPORTA BOX(PODE TER CSS ALTERADO NA TAG) E USEMEDIAQUERY
import { Outlet } from 'react-router-dom'; //PRA RANDERIZAR A PAGINA
import { useSelector } from 'react-redux'; //SELETOR
import Navbar from 'components/Navbar'; //COMPONENT DE NAVBAR
import Sidebar from 'components/Sidebar';
import { useGetUserQuery } from 'state/api'; //QUERY DE BUSCA DE USUARIO, DA API

const Layout = () => {
  //FUNÇÃO QE EXPORTA O LAYOUT (SCENE PAI)
  const isNonMobile = useMediaQuery('(min-width: 600px)'); // FUNÇÃO QUE UTILIZA HOOKS USESTATE E USEEFFECT PARA ALTERAR A PÁGINA DE ACORDO COM O TAMANHO DA TELA
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // CONSTANTE QUE ARMAZENA ESTADO DA SIDEBAR, COM RELAÇÃO A ABERTO OU FECHADO
  const userId = useSelector((state) => state.global.userId); //USER ID SELECIONA COMO ESTADO A GLOBAL USERID (STATE.GLOBAL.userId)
  const { data } = useGetUserQuery(userId); //Busca dados no MongoDB referentes ao USUARIO // ASSOCIA UMA PROPRIEDADE DE OBJETO A UM RETORNO DE DADOS
  console.log('data', data); //TESTE CONSOLE LOG DE DADOS
  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%">
      {' '}
      {/*UMA DIV QUE CONTEM A TELA INTEIRA */}
      <Sidebar // BARRA LATERAL ESQUERDA
        user={data || {}} //USUARIO RECEBE DADOS DO USUÁRIO
        isNonMobile={isNonMobile} //PROPRIEDADE IS NONMOBYLE
        drawerWidth="250px" //LARGURA DO DRAWER
        isSidebarOpen={isSidebarOpen} //ABERTO OU NAO? PROPRIEDADE DE OBJETO
        setIsSidebarOpen={setIsSidebarOpen}
      />{' '}
      {/*FECHA LADO ESQUERDO */}
      <Box flexGrow={1}>
        {' '}
        {/*LADO ESQUERDO! ADICIONA NAVBAR EM UMA BOX SEPARADA PARA ATRBUIR FLEXGROW A BARRA SUPERIOR */}
        <Navbar //NAVBAR
          user={data || {}} //DADOS ATRIBUIDOS
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />{' '}
        {/*RENDER PAGE CHILD ELEMENTS, DASHBOARD,EMBAIXO DA NAVBAR */}
      </Box>{' '}
      {/*FECHA LADO ESQUERDO */}
    </Box> //*FECHA DISPLAY */}
  );
};

export default Layout; //RETORNA CONSTANTE GERAL DE LAYOUT
