import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import book from '../../../assets/projects/book.png';
import math from '../../../assets/projects/math.png';
import leaderboard from '../../../assets/projects/leaderboard.jpg';
import space from '../../../assets/projects/space.png';
import animalzoo from '../../../assets/projects/zoo.png';
import tvshow from '../../../assets/projects/show.png';
import bookstore from '../../../assets/projects/bookstore.png';
import 'swiper/css';
import './index.scss';

const slides = [
  {
    url: `${tvshow}`,
    live: 'https://bespoke-kelpie-bb37b1.netlify.app/',
    source: 'https://github.com/Said-laasri/Tv-show',
    title: 'Tv-show',
    description: 'Tv-show is a website for a tv show that contains information about the tv show and the episodes and the schedule of the tv show.',
  },
  {
    url: `${animalzoo}`,
    live: 'https://said-laasri.github.io/Capstone-Logistic-conference/',
    source: 'https://github.com/Said-laasri/Capstone-Logistic-conference',
    title: 'Logistic-conference',
    description: 'Logistic-conference is a website for a conference that contains information about the conference and the speakers and the schedule of the conference.',
  },
  {
    url: `${book}`,
    live: 'https://said-laasri.github.io/Awsome-Book/',
    source: 'https://github.com/Said-laasri/Awsome-Book',
    title: 'Awsome-Book',
    description: 'Awsome books website is a page that contains information about list of books with the title and author names.',
  },
  {
    url: `${math}`,
    live: 'https://62f4ddf1408c40091ecbd8ef--gleeful-selkie-06c959.netlify.app/',
    source: 'https://github.com/Said-laasri/math-magicians',
    title: 'Math-magicians',
    description: 'math magician Math-Magician" is a web app for all lovers of mathematics. It is a Single Page Application (SPA) that allows users to make simple calculations and read a random math-related quote.',
  },
  {
    url: `${space}`,
    live: 'https://space-hub-eight.vercel.app/',
    source: 'https://github.com/Said-laasri/space-hub',
    title: 'Space-hub',
    description: 'space hub website is a page that contains information about all space missions and rocket used to travel in space . and also you can joing any mission and reserve any rocket availabale for the mission.',
  },
  {
    url: `${leaderboard}`,
    live: 'https://car-rental-k2ms0rho4-nickemma.vercel.app/',
    source: 'https://github.com/NickEmma/car-rental-app',
    title: 'Car-rental',
    description: 'Exotic Rental Car is a car rental agencies primarily serve people who requires a temporary vehicle, It allows users to create an account, login, and book a car for a specific period of time. It also allows users to view all available cars, and view a specific car. It also allows users to view all bookings made by a specific user',
  },
  {
    url: `${bookstore}`,
    live: 'https://bookstore-react-gamma.vercel.app/',
    source: 'https://github.com/Said-laasri/bookstore-react',
    title: 'Bookstore',
    description: 'The Bookstore is a website where the user can display a list of books, add a book by providing a title, an author, and selecting from the categories, and remove a selected book.',
  },
];

const Slideshow = () => (
  <>
    <Swiper
      direction="vertical"
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {slides.map((item) => (
        <SwiperSlide
          className="swip"
          key={item}
          style={{
            backgroundImage: `url(${item.url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="imagecontainer">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="btb-acc">
              <a className="flat-button" href={item.live}>
                Live
              </a>
              <a className="flat-button" href={item.source}>
                Source
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);

export default Slideshow;
