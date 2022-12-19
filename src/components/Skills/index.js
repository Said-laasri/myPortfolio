import Loader from 'react-loaders';
import { useEffect, useState } from 'react';
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { DiRuby, DiRor, DiPostgresql } from 'react-icons/di';
import { SiTailwindcss, SiRedux } from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Skills = () => {
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
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div className="table">
          <div className="fullstack font">
            <span>FrontEnd</span>
            <span>BackEnd</span>
          </div>
          <div className="fullstack">
            <article className="flex">
              <span>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                JavaScript
              </span>
              <span>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                Css
              </span>
              <span>
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />

                Html
              </span>

              <span>

                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />

                React
              </span>
              <span>

                <SiRedux color="#7248B6" />
                Redux
              </span>
              <span>

                <FontAwesomeIcon icon={faSass} color="#5ED4F4" />
                Scss
              </span>
              <span>

                <SiTailwindcss color="#5ED4F4" />

                Tailwind
              </span>
              <span>

                <FontAwesomeIcon icon={faBootstrap} color="#5ED4F4" />
                Bootstrap
              </span>
            </article>
            <article className="flex">

              <span>

                <DiRuby color="#C21010" />

                Ruby
              </span>

              <span>

                <DiRor color="#5ED4F4" />
                Rails
              </span>
              <span>

                <DiPostgresql color="#5ED4F4" />
                Postgres
              </span>
            </article>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
