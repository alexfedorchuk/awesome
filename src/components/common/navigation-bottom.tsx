import React from 'react';
import Box from '@mui/material/Box';


const NavigationBottom: React.FC = () => (
  <Box sx={{
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    pt: 2,
    pb: 'calc(16px + env(safe-area-inset-bottom))',
    borderTop: 1,
  }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        1
      </div>
      <div>
        2
      </div>
      <div>
        3
      </div>
      <div>
        4
      </div>
    </Box>
  </Box>
);

export default NavigationBottom;
