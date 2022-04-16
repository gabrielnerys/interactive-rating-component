import React from 'react';
import thanks from '../images/thanks.svg';
import Footer from './Footer';
import './ThanksCard.css';

const ThanksCard = () => {
  return (
    <>
      <main>
        <section className="ThanksCard">
        <img src={ thanks } alt="" />
        <p className='ratingNote'>You selected {} out of 5</p>
        <div className="paragraph">
          <h1>Thank you!</h1>
          <p> 
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don't hesitate to get in touch!
          </p>
        </div>
        </section>
      </main>
    <Footer />
    </>
  );
}

export default ThanksCard;