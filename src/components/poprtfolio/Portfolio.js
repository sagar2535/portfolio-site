import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Chat Web Application',
    github: 'http://github.com/sagar2535/chat-app',
    demo: 'https://chat-app-messenger-clone.vercel.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Food Order Web Application',
    github: 'http://github.com/sagar2535/food-order-app',
    demo: 'https://food-order-app-sagar-kumar.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Natours Web Application',
    github: 'https://github.com/sagar2535/Natous_web_app',
    demo: 'https://www.natours.dev/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Live Weather Application',
    github: 'https://github.com/sagar2535/react-weather-app',
    demo: 'https://react-dynamic-weather-app.netlify.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Personal Portfolio web Application',
    github: 'https://github.com/sagar2535/portfolio-site',
    demo: 'https://portfolio-site-sagar.vercel.app/',
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
