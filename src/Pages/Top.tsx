import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { LoginButton } from '../Components/LoginButton';
import { LogoutButton } from '../Components/LogoutButton';
import { SignupButton } from '../Components/SignupButton';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import axios, { AxiosRequestConfig } from 'axios';

const Home = () => {
  const { isAuthenticated } = useAuth0();

  const domain = 'dev-e1ux64aaipt26x04.us.auth0.com';
  const client_id = 'sIul2UwdQwcKhI0yUlfOGhT1SZcptNrB';
  const client_secret =
    '_sI7Y8kNUb7ehvSO6Iq6r6Nniodg-P-m6qiStqX7IC9rLRy6Ae7SZPNecXjuA2JB';
  const audience = `https://${domain}/api/v2/`;
  const options = {
    method: 'POST',
    url: `https://${domain}/oauth/token`,
    headers: { 'content-type': 'application/json' },
    data: {
      client_id: client_id,
      client_secret: client_secret,
      audience: audience,
      grant_type: 'client_credentials',
    },
  };

  const getToken = (options: AxiosRequestConfig<any>) => {
    return axios(options)
      .then((res) => {
        const token = res.data.access_token;
        console.log(token);
        return token;
      })
      .catch((err) => {
        return console.log(err);
      });
  };

  const token = getToken(options)
  console.log(token)

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2} />
        <Grid item xs={10}>
          <Box height={10} />
          <Typography variant='h4'>
            Top（ログインしていなくても閲覧可）
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
            <Button variant='text' href='http://localhost:3000/Contents1'>
              Contents1（ログイン不要）
            </Button>
          </p>
          <p>
            <Button variant='text' href='http://localhost:3000/Contents2'>
              Contents2（ログイン一部必須）
            </Button>
          </p>
          <p>
            <Button variant='text' href='http://localhost:3000/Profile'>
              Profileページ（ログイン必須）
            </Button>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
