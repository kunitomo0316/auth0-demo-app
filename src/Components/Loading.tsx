import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

function Loading() {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='50vh'
    >

        <CircularProgress />
        <Typography>　Loading...</Typography>

    </Box>
  );
}

export default Loading;
