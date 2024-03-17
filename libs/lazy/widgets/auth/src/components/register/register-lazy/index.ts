import { lazy } from 'react';

export const RegisterWrapperLazy = lazy(() =>
  import('../register-root').then(module => ({ default: module.RegisterRoot }))
);
