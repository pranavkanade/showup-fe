import React from 'react';
import classname from 'classnames';
import Link from 'next/link';

import { iNavOption } from '../index';

import styles from './index.module.scss';

export interface INavLink {
  navOption: iNavOption;
  active: boolean;
  onMenuClick: (menu: string) => void;
}

const navLink: React.FC<INavLink> = ({ navOption, active, onMenuClick }) => {
  const activeBarClass = active
    ? classname(styles.activationBar, styles.active)
    : classname(styles.activationBar);

  return (
    <li className={styles.navLink}>
      <Link href={navOption.href}>
        <a onClick={() => onMenuClick(navOption.menu)}>{navOption.menu}</a>
      </Link>
      <div className={activeBarClass}></div>
    </li>
  );
};

export default navLink;
