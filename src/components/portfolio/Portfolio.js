import React from 'react';
import './portfolio.css';
import { data } from './PortfolioData';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>

      <h2>Portfolio</h2>

      <div className='container portfoilio__container'>
        {data.map((item) => (
          <article key={item.id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>

            <div className='portfolio__item-cta'>
              <a
                href={item.github}
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                Github
              </a>
              <a
                href={item.demo}
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
