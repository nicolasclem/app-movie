import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/logo/logoMovie.png'
import { Link, useLocation } from 'react-router-dom';
import'./navBar.css';


const optionNav= [
    {
      display: 'Movies',
      path:'/'
    },
    {
      display: 'Tv',
      path:'/tv'
    }
  
  ]

export default function NavBar() {

    const {pathname}=useLocation();
 

    const active= optionNav.findIndex(e =>e.path === pathname);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#151515'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to={'/'}>
          <img
              alt=""
              src={logo}
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{' '}
            </Link>
          </IconButton>
          <Typography variant="p" component="div" sx={{ flexGrow: 1 }} >
              <ul>{
                  optionNav.map((e,i)=>(
                  <li  key={i} className={`${i===active ?'active':''}`}>
                    <Link to={e.path}>
                      {e.display}
                    </Link>
                  </li>
                  ))
                  }
              </ul>
        </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}