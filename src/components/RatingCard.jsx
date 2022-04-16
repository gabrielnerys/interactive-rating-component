import React from 'react';
import star from '../images/star.svg';
import Footer from './Footer';
import './RatingCard.css';

const RatingCard = () => {
  return (
    <>
      <main>
        <section className="ratingCard">
          <img src={ star } alt="" />
          <div className="paragraph">
            <h1>How did we do?</h1>
            <p> 
              Please let us know how we did with your support request. All feedback is appreciated 
              to help us improve our offering!
            </p>
          </div>
          <div className="rating">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <button type="submit" className="submit" >SUBMIT</button>
        </section>
      </main>
      <Footer />
    </>

  );
}

export default RatingCard;