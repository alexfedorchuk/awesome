import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


export const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      Awesome header
    </Toolbar>
  </AppBar>
);

export default Header;
