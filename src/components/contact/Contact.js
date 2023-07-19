import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';
const Contact = () => {
  const formRef = useRef();
  const sendSuccess = () => {
    toast.success('Message sent successfully');
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_por71mr',
      'template_65sf5va',
      formRef.current,
      'nyRjeI3TiHovVweZr'
    );
    sendSuccess();
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>kumarsagar91550@gmail.com</h5>
            <a
              href='mailto:sagarkumar2535@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>9310384814</h5>
            <a
              href='https://api.whatsapp.com/send?phone=9310384814'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email Address'
            required
          />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>

          <button
            type='submit'
            className='btn btn-primary'
            // onClick={sendSuccess}
          >
            send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
