import React, { useState } from 'react';
import Link from 'next/link';

import NavLink from '../NavLink';
import { iNavOption } from '../index';

import styles from './index.module.scss';

interface INavbar {
  siteTitle: string;
  options: iNavOption[];
}

const Navbar: React.FC<INavbar> = ({ siteTitle, options }) => {
  const [activeMenu, setActiveMenu] = useState('');
  return (
    <div className={styles.navbar}>
      <div>
        <nav>
          <Link href="/">
            <a className={styles.companyLogo} onClick={() => setActiveMenu('')}>
              {siteTitle}
            </a>
          </Link>
        </nav>
        <nav>
          <ul>
            {options.map((opt, idx) => (
              <NavLink
                key={idx}
                navOption={opt}
                active={activeMenu === opt.menu}
                onMenuClick={setActiveMenu}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
