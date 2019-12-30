import React from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

interface CardInterface {
  color?: string;
  style?: React.CSSProperties;
}

const COLORS = {
  red: 'red',
  blue: 'blue',
  green: 'green',
  black: 'black',
  grey: 'grey'
};

const getColoredClassName = (colorName: string): string => {
  switch (colorName) {
    case COLORS.red:
      return styles.red;
    case COLORS.blue:
      return styles.blue;
    case COLORS.green:
      return styles.green;
    case COLORS.black:
      return styles.black;
    case COLORS.grey:
      return styles.grey;
    default:
      return '';
  }
};

const Card: React.FC<CardInterface> = ({ children, color, style }) => {
  return (
    <div
      className={classnames(styles.card, getColoredClassName(color || ''))}
      style={style || {}}
    >
      {children}
    </div>
  );
};

export default Card;
