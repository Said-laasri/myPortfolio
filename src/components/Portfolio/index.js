// import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
// import AnimatedLetters from '../AnimatedLetters';
import Slideshow from './projects';
import './index.scss';

function Portfolio() {
  return (
    <>
      <div className="container contact-page">
        <Slideshow />
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio;
