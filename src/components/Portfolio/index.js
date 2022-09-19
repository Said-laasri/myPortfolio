import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            {' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'C',
                'o',
                'm',
                'i',
                'n',
                'g',
                ' ',
                'S',
                'o',
                'o',
                'n',
                '!',
              ]}
              idx={15}
            />
          </h1>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio;
