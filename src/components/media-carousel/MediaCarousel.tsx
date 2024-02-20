import { useRef, useState } from 'react';
import { Options } from '@splidejs/splide';
import { Video } from '@splidejs/splide-extension-video';
// @ts-expect-error - dependency bug
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { isDesktop } from '../../utils/mediaUtils';
import GatherOnPhoneSvg from '../../assets/gather-on-phone-silhouette.svg?react';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';
import { useWindowDimensions } from '../../hooks';
import styled from 'styled-components';

type Props = {
  data: {
    src: string;
    alt: string;
  }[];
  loading: boolean;
};

const CarouselView = styled.div``;

const MediaCarousel = ({ data, loading }: Props) => {
  const splideRef = useRef<Splide>(null);
  const { height } = useWindowDimensions();
  const [duration, setDuration] = useState(3000);
  const playerHeight = (isDesktop ? 0.75 : 1) * height;

  const splideOptions: Options = {
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    height: playerHeight,
    interval: 10000,
    pauseOnHover: false,
    resetProgress: false,
    extensions: Video,
    video: {
      loop: true,
      mute: true,
      playerOptions: {
        htmlVideo: {
          autoplay: true,
          controls: false,
          preload: 'auto',
          height: playerHeight,
        },
      },
    },
  };

  const splideVideoList = (
    <ul className="splide__list">
      {data.map((slide, index) => (
        <SplideSlide
          key={index}
          className="splide__slide"
          data-splide-html-video={slide.src}
        >
          <div className="splide__slide__container">
            <GatherOnPhoneSvg height={playerHeight} />
          </div>
          {/* <div>Other contents</div> */}
        </SplideSlide>
      ))}
    </ul>
  );

  return (
    <CarouselView className="wrapper">
      <Splide
        ref={splideRef}
        options={splideOptions}
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
      >
        <div style={{ position: 'relative' }}>
          <SplideTrack className="bg-opacity-40">{splideVideoList}</SplideTrack>
        </div>

        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>

        <button className="splide__toggle">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button>
      </Splide>
    </CarouselView>
  );
};

export { MediaCarousel };
