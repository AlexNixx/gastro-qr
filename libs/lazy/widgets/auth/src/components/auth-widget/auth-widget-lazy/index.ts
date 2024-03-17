import { lazy } from 'react';

export const AuthWidgetLazy = lazy(() =>
  import('../auth-widget-root').then(module => ({
    default: module.AuthWidgetRoot
  }))
);
