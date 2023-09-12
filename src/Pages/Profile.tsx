import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../Components/LoginButton';
import { LogoutButton } from '../Components/LogoutButton';
import { SignupButton } from '../Components/SignupButton';
import { Button, Grid } from '@mui/material';

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = 'dev-e1ux64aaipt26x04.us.auth0.com';

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: 'read:current_user',
          },
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e: any) {
        console.log("エラー");
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} />
      <Grid item xs={10}>
        <div>
          <h3>Profileページ（ログイン必須）</h3>
          <p>
            {isAuthenticated ? (
              <LogoutButton />
            ) : (
              <>
                <SignupButton />
                <LoginButton />
              </>
            )}
          </p>
          <p>
            <Button variant='text' href='http://localhost:3000/Top'>
              Topページ
            </Button>
          </p>
          <img src={user?.picture} alt={user?.name} />
          <p>name: {user?.name}</p>
          <p>email: {user?.email}</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <h3>User Metadata</h3>
          {userMetadata ? (
            <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
          ) : (
            'No user metadata defined'
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default Profile;
