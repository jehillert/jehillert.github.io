import { Options } from '@splidejs/splide';
import { Video } from '@splidejs/splide-extension-video';
// @ts-expect-error - dependency bug
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { generateSlides } from './utils';

const MediaCarousel = () => {
  const options = {
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: '15rem',
  };

  return (
    <div className="wrapper">
      <Splide
        options={options}
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
      >
        <div style={{ position: 'relative' }}>
          <SplideTrack>
            {generateSlides().map((slide) => (
              <SplideSlide key={slide.src}>
                <img src={slide.src} alt={slide.alt} />
              </SplideSlide>
            ))}
          </SplideTrack>
        </div>

        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>

        <button className="splide__toggle">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button>
      </Splide>
    </div>
  );
};

export { MediaCarousel };
