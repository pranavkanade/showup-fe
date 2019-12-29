import React from 'react';
import Navbar from '../ui/components/elements/Navbar';
import { navMenus, SiteTitle } from './config';

import styles from './layout.module.scss';

const layout: React.FC = props => {
  const { children } = props;

  return (
    <div>
      <Navbar options={navMenus} siteTitle={SiteTitle} />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default layout;
