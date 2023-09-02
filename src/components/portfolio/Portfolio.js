import React from 'react';
import './portfolio.css';
import {
  Admin,
  ChatApp,
  FoodApp,
  GeniusAi,
  LiveWeather,
  Store,
} from './images';

const data = [
  {
    id: 1,
    image: Admin,
    title: 'Admin Panel Web Application',
    github: 'https://github.com/sagar2535/e-commerce-admin',
    demo: 'https://e-commerce-admin-sagar.vercel.app',
  },
  {
    id: 2,
    image: Store,
    title: 'Genius AI Web Application',
    github: 'https://github.com/sagar2535/e-commerce-store',
    demo: 'https://e-commerce-store-sagar.vercel.app',
  },
  {
    id: 3,
    image: GeniusAi,
    title: 'Genius AI Web Application',
    github: 'https://github.com/sagar2535/genius-ai',
    demo: 'https://genius-ai-one.vercel.app/',
  },
  {
    id: 4,
    image: ChatApp,
    title: 'Chat Web Application',
    github: 'http://github.com/sagar2535/chat-app',
    demo: 'https://chat-app-messenger-clone.vercel.app/',
  },
  {
    id: 5,
    image: FoodApp,
    title: 'Food Order Web Application',
    github: 'http://github.com/sagar2535/food-order-app',
    demo: 'https://food-order-app-sagar-kumar.vercel.app/',
  },
  {
    id: 6,
    image: LiveWeather,
    title: 'Live Weather Application',
    github: 'https://github.com/sagar2535/react-weather-app',
    demo: 'https://react-dynamic-weather-app.netlify.app/',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfoilio__container'>
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
              <a href={github} target='_blank' className='btn' rel='noreferrer'>
                Github
              </a>
              <a
                href={demo}
                target='_blank'
                className='btn btn-primary'
                rel='noreferrer'
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
