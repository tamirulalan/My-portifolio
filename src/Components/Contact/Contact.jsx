import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {FaWhatsappSquare} from 'react-icons/fa'
import React from 'react'
import ('./Contact.css')


const Contact = () => {
  const form =useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nxvjfff', 'template_gfqgxps', form.current, 'ebnEWwErnRsGyJeM5')
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tamirulalan@gmail.com</h5>
            <a href='mailto:tamirulalan@gmail.com' target="_blank" rel="noreferrer">send me</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>Tamiru Taye</h5>
            <a href='https://m.me/tamiru.taye.714' target="_blank" rel="noreferrer">send me</a>
          </article>
          <article className='contact__option'>
            <FaWhatsappSquare className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+9195798874</h5>
            <a href='https://api.whatsapp.com/send?phone+9195798874' target="_blank" rel="noreferrer">send me</a>
          </article>
        </div>
        {/* End of left */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  name='name' placeholder='Your full Name' required/>
          <input type="text" name='email' placeholder='Your email' required />
          <textarea name="Message"  rows="7" placeholder='You Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
