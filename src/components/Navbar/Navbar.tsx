import { AppBar, CssBaseline, Typography, Toolbar } from '@material-ui/core';
import './Navbar.scss';
// import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position='static' className='appbar'>
      <CssBaseline />
      <Toolbar>
        <Typography variant='h5' className='logo'>
          Addressbook
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
