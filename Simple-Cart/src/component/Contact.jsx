import React from 'react'
import '../static/css/contact.css';

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contact-heading">
          <h2>Contact Us</h2>
        </div>

        <div className="custom-container">

          <div className="custom-row">

            <div className="column">
              <div className="contact-widget">

                <div className="contact-widget-item">
                  <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="text">
                    <h5>Address</h5>
                    <p>364 Cong Hoa, Ward 13, Tan Binh District, Ho Chi Minh City</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="text">
                    <h5>Contact Us</h5>
                    <p>125-711-811 | 125-668-886</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="text">
                    <h5>Email</h5>
                    <p>Loc.NguyenPhucBuu@nashtechglobal.com</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="column">
              <div className="contact-form">
                <form action="#">
                  <input className='input' type="text" placeholder='Name' />
                  <input className='input' type="email" placeholder='Email' />
                  <textarea placeholder='Comment'></textarea>
                  <button type='submit' className='site-btn'>Send Message</button>
                </form>
              </div>
            </div>

          </div>

          <div className="custom-row">
            <div className="map-column">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.125868998649!2d106.63859611526028!3d10.801670561679751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752907f70b4eab%3A0xe0d5e452dc012517!2zMzY0IMSQLiBD4buZbmcgSMOyYSwgUGjGsOG7nW5nIDEzLCBUw6JuIELDrG5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1676606555023!5m2!1svi!2s"
                  width="600"
                  height="450"
                  style={{border:0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="etown"
                >
                </iframe>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
