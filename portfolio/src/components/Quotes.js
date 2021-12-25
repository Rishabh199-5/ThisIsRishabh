import React from "react";
import { Carousel } from 'react-responsive-carousel';
import elonMusk from '../assets/elon.jpeg';
import billGates from '../assets/bill.jpeg';
import mark from '../assets/mark.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import quotesCSS from '../styles/Quotes.module.css';
const Quotes = () => {
    const quotes = [
        {imgUrl: elonMusk,txt:"\"If something's important enough, you should try. Even if - the probable outcome is failure.\""},
        {imgUrl: billGates,txt:"\"Success is a lousy teacher. It seduces smart people into thinking they can’t lose.\""},
        {imgUrl: mark,txt:"\"I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress.\""}
    ];
    return (
      <div className="quotes">
        <h1 className = {quotesCSS.heading}>Inspirations</h1>
        <Carousel autoPlay = {true} interval = {1000} infiniteLoop = {true}>
            {
                quotes.map((quote) => (
                <div className = {quotesCSS.wrapper}>
                    <div className = {quotesCSS.quotesImgWrapper}>
                        <img className = {quotesCSS.quotesImg} src={quote.imgUrl} />
                    </div>
                    <div className = {quotesCSS.quoteString}>
                        <p>{quote.txt}</p>
                    </div>
                </div>
                ))
            }
        </Carousel>
      </div>
    );
  };

  export default Quotes;
  