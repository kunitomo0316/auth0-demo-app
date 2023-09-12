import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { LoginButton } from '../Components/LoginButton';
import { LogoutButton } from '../Components/LogoutButton';
import { SignupButton } from '../Components/SignupButton';
import { Grid, Box, Typography, Stack, Button } from '@mui/material';

function Contents1() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2} />
        <Grid item xs={10}>
          <Box height={10} />
          <Typography variant='h4'>
            Contents1（ログインしていなくても閲覧可）
          </Typography>
          <Box height={10} />
          {isAuthenticated ? (
            <LogoutButton />
          ) : (
            <>
              <Stack direction='row' spacing={2}>
                <SignupButton />
                <LoginButton />
              </Stack>
            </>
          )}
          <p>
            <Button variant='text' href='http://localhost:3000/Top'>
              Topページ
            </Button>
          </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contents1;
