import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import {TiMessages} from "react-icons/ti";

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section>

      <h1 id="contact" className='intro'><TiMessages/>Contact</h1>

        <form id="contact-form" onSubmit={handleSubmit}>

            <div>
            <label htmlFor="name">Name:</label><br />
            <input type="text" placeholder="your name" name="name" defaultValue={name} onBlur={handleChange} />
            </div>

            <div>
            <label htmlFor="email">Email:</label><br/>
            <input type="email" placeholder="youremail@g.co" name="email" defaultValue={email} onBlur={handleChange} />
            </div>

            <div>
            <label htmlFor="message"></label>
            <textarea name="message" rows="5" placeholder="Leave a message!" defaultValue={message} onBlur={handleChange} />
            </div>

            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <button data-testid="button" type="submit">Submit</button>
        </form>
    
    </section>
  );
}

export default Contact;