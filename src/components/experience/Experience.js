import React from 'react';
import './experience.css';
import { backendData, frontendData } from './ExperienceData';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>

      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>

          <div className='experience__contenet'>
            {frontendData.map((data) => (
              <article className='experience__details' key={data.id}>
                {data.icon}
                <div>
                  <h4>{data.title}</h4>
                  <small className='text-light'>{data.difficulty}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* END OF FRONTEND DEVELOPMENT */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__contenet'>
            {backendData.map((data) => (
              <article className='experience__details' key={data.id}>
                {data.icon}
                <div>
                  <h4>{data.title}</h4>
                  <small className='text-light'>{data.difficulty}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
