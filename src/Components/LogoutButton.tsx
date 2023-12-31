import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout();
  };

  return <Button variant="contained" onClick={handleLogout}>ログアウト</Button>;
}
