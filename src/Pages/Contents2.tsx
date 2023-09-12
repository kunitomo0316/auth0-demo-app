import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { LoginButton } from '../Components/LoginButton';
import { LogoutButton } from '../Components/LogoutButton';
import { SignupButton } from '../Components/SignupButton';
import { Grid, Box, Typography, Stack, Button } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';

function Contents2() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2} />
        <Grid item xs={10}>
          <Box height={10} />
          <Typography variant='h4'>
            Contents2（ログインしていなくても閲覧可）
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
          <p>ログインなしで見れるコンテンツ↓</p>
          <p><LockOpenIcon /><LockOpenIcon /><LockOpenIcon /><LockOpenIcon /><LockOpenIcon /></p>
          <p>ログインしないと見れないコンテンツ↓</p>
          {!isAuthenticated ? <></> : <><p><LockIcon /><LockIcon /><LockIcon /><LockIcon /><LockIcon /></p></>}
        </Grid>
      </Grid>
    </div>
  );
}

export default Contents2;
