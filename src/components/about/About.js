import './about.css';
import ME from '../../assets/sagar-image.png';
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
              <small>2.3+ Years Working</small>
            </article>
          </div>

          <p>
            Welcome to my portfolio! I'm Sagar, a passionate{' '}
            <strong>MERN stack developer</strong>. My expertise lies in crafting
            dynamic and interactive web applications using cutting-edge
            technologies. With a strong web development background, I specialize
            in <strong>MongoDB, Express.js, React, & Node.js</strong>. My drive
            stems from the belief that technology can solve real-world problems.
            I continually strive to enhance my skills and stay abreast of the
            latest trends in web development. Feel free to explore my projects
            and reach out for exciting opportunities and collaborations. I'm
            always eager to take on new challenges and push the boundaries of
            web possibilities. Thank you for visiting, and enjoy your time here!
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
