import { ReactNode } from 'react';

import { LoginWrapperLazy, RegisterWrapperLazy } from '../components';

interface TabSchema {
  value: string | number;
  title: string;
  component: ReactNode;
}

export const AUTH_TABS: TabSchema[] = [
  {
    value: '/login',
    title: 'Login',
    component: <LoginWrapperLazy />
  },
  {
    value: '/registration',
    title: 'Sign up',
    component: <RegisterWrapperLazy />
  }
];
