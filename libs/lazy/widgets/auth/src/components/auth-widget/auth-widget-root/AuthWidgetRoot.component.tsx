import { Suspense } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Tab, TabContainer, TabList, TabPanel } from 'nixx-ui';

import logo from '@gq/assets/image/logo.svg';

import { AUTH_TABS } from '../../../model';

import cls from './AuthWidgetRoot.module.scss';

export const AuthWidgetRoot = () => {
  const { location } = useRouterState();

  return (
    <div className={cls.container}>
      <div className={cls.logoContainer}>
        <img src={logo} alt='gq-logo' width={50} />
      </div>
      <TabContainer value={location.pathname} className={cls.tabContainer}>
        <TabList className={cls.tabList}>
          {AUTH_TABS.map(tab => (
            <Tab value={tab.value} className={cls.tab} key={tab.value}>
              <Link to={tab.value} className={cls.link}>
                {tab.title}
              </Link>
            </Tab>
          ))}
        </TabList>
        {AUTH_TABS.map(tab => (
          <TabPanel value={tab.value} className={cls.tabPanel} key={tab.value}>
            {/*TODO: update fallback*/}
            <Suspense fallback={null}>{tab.component}</Suspense>
          </TabPanel>
        ))}
      </TabContainer>
    </div>
  );
};
