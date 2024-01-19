import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new project, creative ideas or opportunitties to be part of your
            visions
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">golukumarsingh7323@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91 8210169217</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100029117081200&mibextid=9R9pXO"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/rathore_1145?igsh=MmVlMjlkMTBhMg=="
              className="contact__social-link"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/golukumarsingh11"
              className="contact__social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/golu-kumar-87599524b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form
          className="contact__form"
          action="https://formspree.io/f/mvoegyaq"
          method="POST"
        >
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                className="form__control"
                autoComplete="off"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                className="form__control"
                autoComplete="off"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                name="Subject"
                placeholder="Your Subject"
                className="form__control"
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              name="Message"
              className="form__control textarea"
              autoComplete="off"
              required
              minLength={5}
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
