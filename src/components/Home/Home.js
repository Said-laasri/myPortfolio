import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo/Logo';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import logoS from '../../assets/images/logo-s.png';
import './Home.scss';

function Home() {
  const [letterClass, setletterClass] = useState('text-animate');
  const nameArray = ['a', 'i', 'd'];
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    setTimeout(() => {
      setletterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>&lsquo;m</span>
          <img src={logoS} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={18}
          />
          {' '}
        </h1>
        <h2>Frontend/Backend Developer / Tech enthusiast</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  );
}

export default Home;
