import './about.css';
import ME from '../../assets/me-about-2.png';
import { FaAward } from 'react-icons/fa';
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Me' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1.5+ Years Working</small>
            </article>
          </div>

          <p>
            Aspiring full-stack web developer with a specialization in MERN
            stack. Strategic thinker, and a team player with an eye for detail.
            Looking forward to working in an exciting and challenging work
            environment.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
