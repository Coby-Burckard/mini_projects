import React from 'react';
import ImageSlider from './ImageSlider';
import TitleBlock from '../page/TitleBlock';

const NASAPage = () => {
  return (
    <>
      <TitleBlock title="NASA APOD API">
        <p className="modal__p">
          A frontend mini project. Images are received from NASA’s{' '}
          <a
            className="modal__link"
            href="https://apod.nasa.gov/apod/astropix.html"
          >
            Astronomy Picture of the Day API
          </a>
          . The popular{' '}
          <a
            className="modal__link"
            href="https://css-tricks.com/can-get-pretty-far-making-slider-just-html-css/"
          >
            css only slider
          </a>{' '}
          was modified to work with React controlled inputs and state. Come back
          tomorrow to see a new image!
        </p>
      </TitleBlock>
      <ImageSlider />
    </>
  );
};

export default NASAPage;
