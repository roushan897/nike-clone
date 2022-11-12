import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

export const Procted = ({children}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return isAuthenticated ? children : loginWithRedirect();
}

