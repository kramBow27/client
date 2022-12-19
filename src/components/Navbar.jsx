import React, { useState } from 'react';
import {
  LightModeOutlined, //ICONES
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from '@mui/icons-material';
import FlexBetween from 'components/FlexBetween'; //CAIXA FLEX PADRÃO
import { useDispatch } from 'react-redux'; //FUNÇÃO QUE ATRIBUI VALOR DO DISPATCH A ALGUMA VARIAVEL OU CONSTANTE OU PROPRIEDADE ETC
import { setMode } from 'state'; //ESCOLHE MODO
import profileImage from 'assets/profile.jpeg';
import {
  AppBar, //The top App bar provides content and actions related to the current screen. It's used for branding, screen titles, navigation, and actions.
  Button,
  Box,
  Typography,
  IconButton,
  InputBase, //REFERENCIA DA MUI AO INPUTBASE DO REACT
  Toolbar, //BARRA DE FERRAMENTAS
  Menu, //ABRE OPÇÕES, LISTA TEMPORARIA
  MenuItem, //ITEM DA LISTA TEMPORARIA
  useTheme,
} from '@mui/material';

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  //NAVBAR TAMBÉM PRECISA DOS MESMOS OBJETOS DA SIDEBAR PARA QUE ESTAS RESPONDAM UMA A OUTRA COM RELAÇÃO A ABERTURA, FECHAMENTO, TEMA
  const dispatch = useDispatch(); //Usa a busca de mudança de estado para uma constante
  const theme = useTheme(); //TEMA

  const [anchorEl, setAnchorEl] = useState(null); //efeito ancora para o menu, aberto ou fechado
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget); //clique para evento
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar //BARRA DE APLICATIVO
      sx={{
        //CSS
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {' '}
        {/* ESQUERDO E DIREITO! BARRA DE FERRAMENTAS, ESPAÇO ENTRE */}
        {/* LEFT SIDE */}
        <FlexBetween>
          {' '}
          {/*CAIXA FLEX COM PADRÃO */}
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {' '}
            {/** ICONE, ABRE E FECHA A BARRA */}
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt} //CAIXA FLEX PARA BUSCA
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." /> {/**INPUT BASE */}
            <IconButton>
              {' '}
              {/**BOTAO ICONE, DENTRO ICONE BUSCA */}
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {' '}
            {/**O BOTÃO USA DISPATCH PARA BUSCAR O MODO */}
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlined sx={{ fontSize: '25px' }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined sx={{ fontSize: '25px' }} />
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textTransform: 'none',
                gap: '1rem',
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: 'cover' }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: '25px' }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
