'use client';

import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, IconButton } from '@mui/material';

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
          sx={{ position: 'fixed', bottom: 80, right: 100 }}
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
                {/* <Button variant="contained">Contained</Button> */}
                <IconButton color='primary' sx={{background: 'black', height:50, width:50}}>
                    <KeyboardArrowUpIcon sx={{height:50, width:50}}/>
                </IconButton>
            </ScrollTop>
        </>
    )
};