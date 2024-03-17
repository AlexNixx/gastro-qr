import { lazy } from 'react';

export const LoginWrapperLazy = lazy(() =>
  import('../login-root').then(module => ({ default: module.LoginRoot }))
);
