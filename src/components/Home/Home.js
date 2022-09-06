import React from 'react';
import { Link } from 'react-router-dom';
import logoS from '../../assets/images/logo-s.png';
import './Home.scss';

function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          {' '}
          <br />
          {' '}
          I&apos;m
          <img src={logoS} alt="developer" />
          aid
          <br />
          Web Developer
        </h1>
        <h2>Frontend/Backend Developer / Tech enthusiast</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
}

export default Home;
