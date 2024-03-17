import { Suspense } from 'react';

import { WallpaperRoot } from '@gq/assets/components';
import { AuthWidgetLazy } from '@gq/auth';

import cls from './Auth.module.scss';

export const AuthPage = () => (
  <div className={cls.auth}>
    <WallpaperRoot />
    {/*TODO: update fallback*/}
    <Suspense fallback={null}>
      <AuthWidgetLazy />
    </Suspense>
  </div>
);
