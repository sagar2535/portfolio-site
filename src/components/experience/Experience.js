import React from 'react';
import './experience.css';
import {
  Aws,
  BootStrap,
  Css,
  Docker,
  ExpressJs,
  Git,
  Github,
  Html,
  JavaScript,
  MongoDB,
  Mui,
  MySql,
  NextJs,
  Nginx,
  NodeJs,
  Postman,
  ReactJs,
  ShadcnUi,
  TailwindCss,
  TypeScript,
} from './icons';
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>

          <div className='experience__contenet'>
            <article className='experience__details'>
              <Html className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <Css className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <JavaScript className='experience__details-icon' />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <TypeScript className='experience__details-icon' />
              <div>
                <h4>TYPESCRIPT</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BootStrap className='experience__details-icon' />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <TailwindCss className='experience__details-icon' />
              <div>
                <h4>TAILWIND CSS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <ReactJs className='experience__details-icon' />
              <div>
                <h4>REACT JS</h4>
                <small className='text-light'>Internediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <NextJs className='experience__details-icon' />
              <div>
                <h4>NEXT JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <Mui className='experience__details-icon' />
              <div>
                <h4>MATERIAL UI</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <ShadcnUi className='experience__details-icon' />
              <div>
                <h4>SHADCN UI</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND DEVELOPMENT */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__contenet'>
            <article className='experience__details'>
              <NodeJs className='experience__details-icon' />
              <div>
                <h4>NODE JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <MongoDB className='experience__details-icon' />
              <div>
                <h4>MONGODB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <Aws className='experience__details-icon' />
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <MySql className='experience__details-icon' />
              <div>
                <h4>MY SQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <ExpressJs className='experience__details-icon' />
              <div>
                <h4>EXPERSS JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <Git className='experience__details-icon' />
              <div>
                <h4>GIT</h4>
                <small className='text-light'>Internediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <Postman className='experience__details-icon' />
              <div>
                <h4>POSTMAN</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <Github className='experience__details-icon' />
              <div>
                <h4>GITHUB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <Docker className='experience__details-icon' />
              <div>
                <h4>DOCKER</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <Nginx className='experience__details-icon' />
              <div>
                <h4>NGINX</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
