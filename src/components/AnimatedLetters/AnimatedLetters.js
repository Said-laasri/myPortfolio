/* eslint-disable react/prop-types */
import React from 'react';
import './AnimatedLetters.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => (
  <span>
    {strArray.map((char, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <span key={char + i} className={`${letterClass} _${i + idx}`}>
        {char}
      </span>
    ))}
  </span>
);

export default AnimatedLetters;
