import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './index.scss';

const slideImages = [
  {
    url: 'https://dragon.online-convert.com/download-file/ba595b23-0a40-4025-a4bd-c400ea479d9a/007a7d6f-cdbc-4328-baa2-3a1a2072f786',
    live: 'https://bespoke-kelpie-bb37b1.netlify.app/',
    source: 'https://github.com/Said-laasri/Tv-show',
  },
  {
    url: 'https://dragon.online-convert.com/download-file/26de0766-a58b-46af-bd8a-997dfe863780/2d4ee301-3c18-40f1-abbe-bf059ffc9225',
    live: 'https://bright-torte-dc130d.netlify.app/',
    source: 'https://github.com/Said-laasri/Animal-Zoo',
  },
  {
    url: 'https://dragon.online-convert.com/download-file/1790dd5c-28a7-46e1-a503-c33d05b0ffb7/279defdc-4f39-4281-af3f-0ab7d11a838c',
    live: 'https://said-laasri.github.io/Awsome-Book/',
    source: 'https://github.com/Said-laasri/Awsome-Book',
  },
  {
    url: 'https://dragon.online-convert.com/download-file/656d1945-3a3b-4287-a6d0-f9b8b8576b18/4dd226d7-4c03-42fa-a323-80b9fda50f39',
    live: 'https://62f4ddf1408c40091ecbd8ef--gleeful-selkie-06c959.netlify.app/',
    source: 'https://github.com/Said-laasri/math-magicians',
  },
  {
    url: 'https://dragon.online-convert.com/download-file/95e09cd3-2429-4eee-b404-e79a7e2f93d9/99772ac2-c495-4edb-a2b1-411ddf401c37',
    live: 'https://said-laasri.github.io/My-Porfolio-Website/',
    source: 'https://github.com/Said-laasri/space-hub',
  },
  {
    url: 'https://dragon.online-convert.com/download-file/4211d731-6946-4b7d-bcd4-c703b8d6e489/83a70785-c236-4387-81a4-7d36c34156c3',
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
