import React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Typography from '@mui/material/Typography';


type AppFailedProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  error: string;
};

export const AppFailed: React.FC<AppFailedProps> = ({
  title = 'Service Temporarily Unavailable',
  description,
  error,
}) => (
  <Alert severity="error">
    <AlertTitle>
      {title}
    </AlertTitle>
    <Typography gutterBottom>
      {
        description || (
          <>
            We are performing server maintenance at the moment.
          </>
        )
      }
    </Typography>
    <Typography gutterBottom>
      Our Technical Department is currently resolving the issue.
    </Typography>
    <Typography gutterBottom>
      We appreciate your patience and understanding on the matter.
    </Typography>
    <Typography>
      <b>
        Reason:
        {' '}
        {error.toString()}
      </b>
    </Typography>
  </Alert>
);

export default AppFailed;
