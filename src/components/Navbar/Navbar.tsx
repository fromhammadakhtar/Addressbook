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
        {/* <div className='navlinks'>
          <Link to='/' className='link'>
            Home
          </Link>
          <Link to='/about' className='link'>
            About
          </Link>
          <Link to='/contact' className='link'>
            Contact
          </Link>
          <Link to='/faq' className='link'>
            FAQ
          </Link>
        </div> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
