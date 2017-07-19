/* @flow */
import React from 'react';
import Slider from 'react-slick';

type SlideProps = {
  src: string,
  setset?: [],
  alt?: string
};

type CarouselProps = {
  slides: [SlideProps]
};

const styles = {
  carousel: {

  },
  slide: {
    width: '100%'
  }
};

const Carousel = ({slides}:CarouselProps) => {
  return (
    <Slider arrows autoplay dots>
      {slides.map(({src, srcset, alt}) => (<img
        style={styles.slide}
        src={src}
        srcset={srcset}
        alt={alt} />)
      )}
    </Slider>
  );
};

export default Carousel;
