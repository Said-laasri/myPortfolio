import { useEffect, useState } from 'react';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faBootstrap,
  faReact,
  faSass,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { DiRuby, DiRor, DiPostgresql } from 'react-icons/di';

import { SiRedux } from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I&apos;m a very ambitious full-stack developer looking for a role in
            an IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I&apos;m quiet confident, naturally curious, and perpetually working
            on improving my skills.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, a visionary leader, a gamer, and a foodie. and
            tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <SiRedux color="#7248B6" />
            </div>
          </div>
          <div className="cubespinner1">
            <div className="face1">
              <FontAwesomeIcon icon={faGitAlt} color="#F77E21" />
            </div>
            <div className="face2">
              <DiRuby color="#C21010" />
            </div>
            <div className="face3">
              <DiPostgresql fontSize="16rem" color="#336791" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
            </div>
            <div className="face5">
              <DiRor color="#C21010" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNpm} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
