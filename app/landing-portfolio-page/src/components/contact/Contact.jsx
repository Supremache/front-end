import React from 'react';
import "./contact.css";
import { ValidationError, useForm } from '@formspree/react';
import Lottie from 'lottie-react';
import doneAnimation from '../../animation/done.json';
import contactAnimation from '../../animation/contact.json';
function Contact() {
  const [state, handleSubmit] = useForm("xwkgyrpp");
 
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-email' />
        Contact us
      </h1>
      <p className='sub-title'>
        Contact us for more information and Get nosfied when publish something new!
      </p>
      <div style={{justifyContent: "space-between"}} className="flex">
        <form onSubmit={handleSubmit}>
          <div className='group-mail flex'>
            <label htmlFor="">Email address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='group-msg flex'>
            <label htmlFor="">Your message:</label>
            <textarea required name="message" id="message"></textarea>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className='submit'>
            {state.submitting ? "Submitting..." : "Submit" } 
            </button>

          {state.succeeded && ( <p className='flex' style={{ margin: "1rem 0" }}>
           <Lottie loop={false} style={{width:"50%"}} animationData={doneAnimation} />
            Your message has been sent succesfully. 	&#x1F44C;</p> )}
        </form>
        <div className="contact-animation">
        <Lottie animationData={contactAnimation} />
        </div>
      </div>

    </section>
  )
}

export default Contact
