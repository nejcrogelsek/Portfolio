import React, { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x3dz9dq",
        "template_g66e7dp",
        e.target,
        process.env.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thank you for you message 😊");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "Service error ✖ Please contact me at nejcrogelsek0@gmail.com"
          );
        }
      );
  };

  return (
    <section id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <div className='form-wrapper'>
              <h2>Leave a Message!</h2>
              <form onSubmit={sendEmail}>
                <div className='row'>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      id='input-name'
                      placeholder='Your Name :'
                      value={name}
                      name='name'
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      id='input-email'
                      placeholder='Email :'
                      value={email}
                      name='email'
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='col-md-12'>
                    <input
                      type='text'
                      id='input-subject'
                      placeholder='Subject :'
                      value={subject}
                      name='subject'
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className='col-md-12'>
                    <textarea
                      placeholder='Your message :'
                      id='textarea-message'
                      cols='30'
                      rows='10'
                      name='message'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}></textarea>
                  </div>
                  <div className='col-12'>
                    <button className='heroBtn-resume' type='submit'>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='contact-info-wrapper'>
              <h2>Contact Info</h2>
              <p>
                Feel free to contact me for career prospects, business services,
                and other professional inquiries!
              </p>
              <ul className='contact-list'>
                <li className='contact-item'>
                  <div className='contact-item-icon'>
                    <a
                      href='http://maps.google.com/?q=2380 Slovenj Gradec'
                      target='_blank'>
                      <LocationOnIcon />
                    </a>
                  </div>
                  <div className='contact-item-content'>
                    <span>Location</span>
                    <span>
                      <a
                        href='http://maps.google.com/?q=2380 Slovenj Gradec'
                        target='_blank'>
                        Slovenia, Slovenj Gradec
                      </a>
                    </span>
                  </div>
                </li>
                <li className='contact-item'>
                  <div className='contact-item-icon'>
                    <a
                      href='https://www.linkedin.com/in/nejcrogelsek'
                      target='_blank'>
                      <LinkedInIcon />
                    </a>
                  </div>
                  <div className='contact-item-content'>
                    <span>Find Me On</span>
                    <span>
                      <a
                        href='https://www.linkedin.com/in/nejcrogelsek'
                        target='_blank'>
                        LinkedIn
                      </a>
                    </span>
                  </div>
                </li>
                <li className='contact-item'>
                  <div className='contact-item-icon'>
                    <a href='mailto:nejcrogelsek0@gmail.com'>
                      <EmailIcon />
                    </a>
                  </div>
                  <div className='contact-item-content'>
                    <span>Email Me At</span>
                    <span>
                      <a href='mailto:nejcrogelsek0@gmail.com'>
                        nejcrogelsek0@gmail.com
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
