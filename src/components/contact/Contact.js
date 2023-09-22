import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

const contactItems = [
  {
    id: 1,
    icon: <MdOutlineEmail className='contact__option-icon' />,
    label: 'Email',
    contactInfo: 'kumarsagar91550@gmail.com',
  },
  {
    id: 2,
    icon: <BsWhatsapp className='contact__option-icon' />,
    label: 'Whatsapp',
    contactInfo: '9310384814',
  },
];

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
          {contactItems.map((contact) => (
            <article className='contact__option' key={contact.id}>
              {contact.icon}
              <h4>{contact.label}</h4>
              <h5>{contact.contactInfo}</h5>
              <a
                href='mailto:sagarkumar2535@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                Send a message
              </a>
            </article>
          ))}
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
          />

          <button type='submit' className='btn btn-primary'>
            send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
