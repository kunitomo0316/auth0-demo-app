import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from "../Components/Loading";

const ProtectedRoute = ({ component }: any) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
  });
  return <Component />;
};

export default ProtectedRoute;