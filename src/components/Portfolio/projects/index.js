import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import book from '../../../assets/projects/book.png';
import math from '../../../assets/projects/math.png';
import leaderboard from '../../../assets/projects/leaderboard.jpg';
import space from '../../../assets/projects/space.png';
import animalzoo from '../../../assets/projects/zoo.png';
import tvshow from '../../../assets/projects/show.png';
import './index.scss';

const slideImages = [
  {
    url: `${tvshow}`,
    live: 'https://bespoke-kelpie-bb37b1.netlify.app/',
    source: 'https://github.com/Said-laasri/Tv-show',
  },
  {
    url: `${animalzoo}`,
    live: 'https://bright-torte-dc130d.netlify.app/',
    source: 'https://github.com/Said-laasri/Animal-Zoo',
  },
  {
    url: `${book}`,
    live: 'https://said-laasri.github.io/Awsome-Book/',
    source: 'https://github.com/Said-laasri/Awsome-Book',
  },
  {
    url: `${math}`,
    live: 'https://62f4ddf1408c40091ecbd8ef--gleeful-selkie-06c959.netlify.app/',
    source: 'https://github.com/Said-laasri/math-magicians',
  },
  {
    url: `${space}`,
    live: 'https://said-laasri.github.io/My-Porfolio-Website/',
    source: 'https://github.com/Said-laasri/space-hub',
  },
  {
    url: `${leaderboard}`,
    live: 'https://incandescent-souffle-974b06.netlify.app/',
    source: 'https://github.com/Said-laasri/Leaderboard',
  },
];

const Slideshow = () => (
  <div className="slide-container">
    <Slide>
      {slideImages.map((slideImage, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="each-slide" key={index}>
          <div
            className="images"
            style={{
              backgroundImage: `url(${slideImage.url})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <a className="flat-button" href={slideImage.live}>
              Live
            </a>
            <a className="flat-button" href={slideImage.source}>
              Source
            </a>
          </div>
        </div>
      ))}
    </Slide>
  </div>
);

export default Slideshow;
