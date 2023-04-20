'use client';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      primary: {
          main: '#ef5350',
      },
  },
});

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 80, right: 30 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function ScrollToTop(props) {
  return (
    <>
      <ScrollTop {...props}>
        <ThemeProvider theme={theme}>
          <IconButton disableRipple sx={{ backgroundColor:'rgba(183, 18, 52)',height: 40, width: 40 }}>
            <KeyboardArrowUpIcon sx={{color:'#fff', height: 40, width: 40 }} />
          </IconButton>
        </ThemeProvider>
      </ScrollTop>
    </>
  )
};