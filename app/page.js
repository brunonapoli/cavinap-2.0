import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href = "/" underline="none" color = "inherit">
                Álbum Mundial 2022
              </Link>
            </Typography>
            <Button color="inherit" onClick={() => router.push('/figuritas/nuevo')}>Agregar</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
