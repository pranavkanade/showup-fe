import React from 'react';

import MainForm from './MainForm';

import styles from './index.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>Test</div>
      <MainForm />
    </div>
  );
};

export default Hero;
