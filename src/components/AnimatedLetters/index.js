/* eslint-disable react/no-array-index-key */
import propTypes from 'prop-types';
import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => (
  <span>
    {strArray.map((char, i) => (
      <span key={char + i} className={`${letterClass} _${i + idx}`}>
        {char}
      </span>
    ))}
  </span>
);
AnimatedLetters.propTypes = {
  letterClass: propTypes.string.isRequired,
  strArray: propTypes.instanceOf(Array).isRequired,
  idx: propTypes.number.isRequired,
};
export default AnimatedLetters;
