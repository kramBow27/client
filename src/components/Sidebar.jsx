import React from 'react';
import {
  //IMPORTA BOX
  Box,
  Divider, // LINHA DIVISORIA
  Drawer, //COMPONENTE NAVBAR
  IconButton, //BOTÃO ICONE
  List, //LISTA
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography, //TPOGRAFIA
  useTheme, // TEMA
} from '@mui/material';
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined, ///ICONES ICONES ICONES ICONES ICONES
} from '@mui/icons-material';
import { useEffect, useState } from 'react'; //USE EFFECT TO ALTER STATE
import { useLocation, useNavigate } from 'react-router-dom'; ////RETONRA URL{} E NAVIGATE REDIRECIONA
import FlexBetween from './FlexBetween'; //
import profileImage from 'assets/profile.jpeg';

const navItems = [
  //CRIA ARRAY COM TODOS OS ITENS DE NAVEGAÇÃO, COM SEUS TITULOS E ICONES, MAS PODERIAM TER SIDO ATRIBUIDAS MAIS PROPRIEDADES
  {
    text: 'Dashboard',
    icon: <HomeOutlined />,
  },
  {
    text: 'Client Facing',
    icon: null, // SEM ICONE PORQUE É "PAI" DOS ITENS COM ICONE
  },
  {
    text: 'Products',
    icon: <ShoppingCartOutlined />,
  },
  {
    text: 'Customers',
    icon: <Groups2Outlined />,
  },
  {
    text: 'Transactions',
    icon: <ReceiptLongOutlined />,
  },
  {
    text: 'Geography',
    icon: <PublicOutlined />,
  },
  {
    text: 'Sales',
    icon: null,
  },
  {
    text: 'Overview',
    icon: <PointOfSaleOutlined />,
  },
  {
    text: 'Daily',
    icon: <TodayOutlined />,
  },
  {
    text: 'Monthly',
    icon: <CalendarMonthOutlined />,
  },
  {
    text: 'Breakdown',
    icon: <PieChartOutlined />,
  },
  {
    text: 'Management',
    icon: null,
  },
  {
    text: 'Admin',
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: 'Performance',
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({
  //O QUE É A SIDE BAR?
  user, // RECEBE OBJETO COMO ARGUMENTO
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile, // DEFINE NOMES DE PROPRIEDADES A SEREM DEFINIDAS NA IMPLEMENTAÇÃO DO COMPONENTE
}) => {
  //SE CONSTRÓI A PARTIR DE...
  const { pathname } = useLocation(); // PROPRIEDADE CAMINHO URL  //SEMPRE FUNÇÕES
  const [active, setActive] = useState('');
  const navigate = useNavigate(); //Constante que recebe provavelmente o endereço de destino
  const theme = useTheme(); //ARMAZENA THEMA

  useEffect(() => {
    setActive(pathname.substring(1)); //PROPRIEDADE PATHNAME RECEBE ATUAL LOCALIZAÇÃO E CORTA A BARRA, FUNCIONA JÁ NO PROPRIO OBJETO
  }, [pathname]); //ATRIBUI URL

  return (
    <Box component="nav">
      {isSidebarOpen && ( // SE ESTIVER ABERTA
        <Drawer //DRAWER
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)} //SE ABERTO É FALSO ENTÃO ESTÁ FECHADO
          variant="persistent" //QUE TIPO DE DRAWER
          anchor="left" // QUE LADO?
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              width: drawerWidth, //CSS PRO DRAWER, CLASSE TEM QUE SER ENCONTRADA NO INSPECT
            },
          }}
        >
          <Box width="100%">
            {' '}
            {/**BOX DO DRAWER, DENTRO DO DRAWER */}
            <Box m="1.5rem 2rem 2rem 3rem">
              {' '}
              {/**HEADER DO TITULO */}
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    ECOMVISION
                  </Typography>
                </Box>
                {!isNonMobile && ( //SE NÃO NÃO FOR, SIGNIFICA QUE É
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft /> {/**AI QUANDO FECHAR EXIBE ESSE ICONE */}
                  </IconButton>
                )}
              </FlexBetween>{' '}
              {/**ESSA É A CAIXA COM PRESETS FLEX */}
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                //MAPEA PELA ARRAY DE ITEMS, RECEBE ARGUMENTO DOS PARAMETROS TEXTO E ICONE
                if (!icon) {
                  //SE NÃO TIVER ICONE, É DIV, SÓ TEM TEXTO
                  return (
                    <Typography key={text} sx={{ m: '2.25rem 0 1rem 3rem' }}>
                      {' '}
                      {/*PROPRIEDADES DE OBJETOS SEMPRE ENTRE COLCHETES*/}
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase(); //TEXTO PRA MINUSCULO, PRA USAR COMO TAG DE URL

                return (
                  //RETORNA A LISTA DE ITEMS, QUE É MAPEADA ATRAVÉS DA ARRAY
                  <ListItem key={text} disablePadding>
                    {' '}
                    {/**ITEM */}
                    <ListItemButton //BOTÃO
                      onClick={() => {
                        //QUANDO CLICA
                        navigate(`/${lcText}`); //USA O TEXTO MINUSCULO PRA TAG DE URL
                        setActive(lcText); //DEIXA URL DO NAVIGATE ATIVO
                      }}
                      sx={{
                        //CSS PARA O ITEM, SE SELECIONADO OU NÃO
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : 'transparent',
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon //ICONE, DENTRO DO BOTÃO
                        sx={{
                          //ESTILO PRO ICONE
                          ml: '2rem',
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon} {/**PROPRIEDADE ICONE DO OBJETO */}
                      </ListItemIcon>
                      <ListItemText primary={text} />{' '}
                      {/**TEXTO DO ITEM, NESSE CASO EMBAIXO DO ICONE */}
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: 'auto' }} /> //SE ESTIVER ATIVO, UM ICONE DE SETA APONTANDO PARA A DIREITA SERÁ ADICIONADO EM FLEX COM O ICONE
                      )}
                    </ListItemButton>{' '}
                    {/**FECHOU O BOTAM */}
                  </ListItem> //DENTRO DO ICONE
                );
              })}
            </List>
          </Box>
          <Box bottom="2rem">
            {' '}
            {/**FOOTER DA SIDEBAR CONTENDO INFORMAÇÕES DO USUÁRIO LOGADO */}
            <Divider /> {/**UM DIVIDER SUPERIOR, PARA SEPARAR DA LISTA */}
            <FlexBetween // CAIXA FLEX PARA CONTER ITEMS
              textTransform="none"
              gap="1rem"
              m="1.5rem 2rem 1.2rem 3rem"
            >
              <Box //IMAGEM DE USUÁRIO
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: 'cover' }}
              />
              <Box textAlign="left">
                {' '}
                {/**NOME DE USUARIO A ESQUERDA */}
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}{' '}
                  {/**BUSCA PROPRIEDADE NOME DO OBJETO USER DECLARADO COMO PROPRIEDADE DO OBJETO SIDEBAR */}
                </Typography>
                <Typography //{/**PROPRIEDADE OCUPAÇÃO, OBJETO USER PROPRIEDADE DO OBJETO SIDEBAR */}
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300], //ICONE DE CONFGURAÇÕES
                  fontSize: '25px ',
                }}
              />
            </FlexBetween>{' '}
            {/**FECHA A CAIXA FLEX FOOTER DE USUÁRIO */}
          </Box>{' '}
          {/**FECHA O BOX DO USUÁRIO */}
        </Drawer> //{/*FECHA A NAV BAR */}
      )}
    </Box>
  );
};

export default Sidebar;
