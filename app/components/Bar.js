"use client";

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from 'next/link';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(183, 18, 52)'
    },
    secondary: {
      main: '#FFBE15'
    }
  },
});

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      {...props}
    />
  );
}

function LinkTabMenu(props) {
  return (
    <Tab
      sx={{ fontWeight: 600, fontSize: '.96rem' }}
      component={Link}
      {...props}
    />
  );
}

export default function Bar({ posicion, posicionTabIndicator, props }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pl: 0 }}>
      <List>
        <Tabs
          TabIndicatorProps={{ sx: { top: posicionTabIndicator } }}
          sx={{
            '& .MuiTabs-flexContainer': {
              flexWrap: 'wrap'
            }
          }}
          value={posicion}
          indicatorColor="secondary"
          textColor="inherit"
          scrollButtons='auto'
          variant='fullWidth'
          aria-label="full width tabs example"
        >
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', pl: 1 }}>
              <LinkTabMenu label="Inicio" href="#" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', pl: 1 }}>
              <LinkTabMenu label="Unipolares" href="/unipolar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', pl: 1 }}>
              <LinkTabMenu label="Subterráneos" href="/subte" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', pl: 1 }}>
              <LinkTabMenu label="Certificado Unipolares" href="/certificado/unipolar" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', pl: 1 }}>
              <LinkTabMenu label="Certificado Subterráneos" href="/certificado/subte" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', pl: 1 }}>
              <LinkTabMenu label="Calidad" href="/nosotros/calidad" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', pl: 1 }}>
              <LinkTabMenu label="Contacto" href="/nosotros/contacto" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemButton sx={{ textAlign: 'center', pl: 1 }}>
              <LinkTabMenu label="Historia" href="/nosotros/historia" />
            </ListItemButton>
          </ListItem>
        </ Tabs>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar component="nav" position='static'>
          <Toolbar sx={{ display: { md: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </ Toolbar>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <Tabs
              sx={{
                '& .MuiTabs-flexContainer': {
                  flexWrap: 'wrap',
                  minHeight: 59
                },
              }}
              value={posicion}
              indicatorColor="secondary"
              textColor="inherit"
              scrollButtons='auto'
              variant='fullWidth'
              aria-label="full width tabs example"
            >
              <LinkTab sx={{ minWidth: 70, pr: 0 }} label="Inicio" href="#" />
              <LinkTab sx={{ minWidth: 100 }} label="Unipolares" href="/unipolar" />
              <LinkTab sx={{ minWidth: 150, pr: 0 }} label="Subterráneos" href="/subte" />
              <LinkTab sx={{ minWidth: 150, pr: 0 }} label="Certificado Unipolares" href="/certificado/unipolar" />
              <LinkTab sx={{ minWidth: 150, pr: 0 }} label="Certificado Subterráneos" href="/certificado/subte" />
              <LinkTab sx={{ minWidth: 90 }} label="Calidad" href="/nosotros/calidad" />
              <LinkTab sx={{ minWidth: 90 }} label="Contacto" href="/nosotros/contacto" />
              <LinkTab sx={{ minWidth: 90 }} label="Historia" href="/nosotros/historia" />
            </Tabs>
          </Box>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </ThemeProvider>
    </Box>
  );
}
