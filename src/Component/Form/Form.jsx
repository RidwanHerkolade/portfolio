import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import "./Form.css"
const Form = () => {
  const [fullName, setFullName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [callNumber, setCallNumber] = useState("");
  const [isMessage, setIsMessage] = useState("");

  const form = useRef();
  const handleSubmit = (e) => {
     e.preventDefault()
        emailjs
          .sendForm('service_udj8iac', 'template_3q36svd', form.current, {
            publicKey: 'aPew23D54WJRlFzxD',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              toast.success("message sent", {
                  position: "top-right",
                  // style: { backgroundColor: "#dc3545", color: "red" }
              }
              )
            },
            (error) => {
              console.log('FAILED...', error.text);
               toast.error("message not sent", {
                position: "top-right"
               })
            },
          );
  }
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <div className="form__divs">
        <h1>Get in touch</h1>
        <div className="form__input">
          <label htmlFor="fullName">FullName</label>
          <div className="input">
            <input
              type="text"
              value={fullName}
              placeholder="Full Name"
              name="user_name"
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form__input">
          <label htmlFor="email">Email</label>
          <div className="input">
            <input
              type="email"
              value={isEmail}
              name="user_email"
              placeholder="Email"
              onChange={(e) => setIsEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form__input">
          <label htmlFor="phoneNumber">Phone Number</label>
          <div className="input">
            <input
              type="number"
              value={callNumber}
              required
              placeholder="Phone Number"
              onChange={(e) => setCallNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="form__input">
          <label htmlFor="message">Message</label>
          <div className="input">
            <textarea
              type="text"
              name="message"
              value={isMessage}
              placeholder="Enter a message here ..."
              onChange={(e) => setIsMessage(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form__input">
            <button type="submit" value="send" className="buttons">Send</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
