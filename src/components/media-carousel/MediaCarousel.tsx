import { Options } from '@splidejs/splide';
import { Video } from '@splidejs/splide-extension-video';
// @ts-expect-error - dependency bug
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { styled } from 'styled-components';
import ReactPlayer from 'react-player';

const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Player = styled(ReactPlayer)``;

type Props = {
  data: {
    src: string;
    alt: string;
  }[];
  loading: boolean;
};

const MediaCarousel = ({ data, loading }: Props) => {
  const options = {
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
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
            {data.map((slide) => (
              <SplideSlide key={slide.src}>
                <PlayerContainer>
                  <Player url={slide.src} width="100%" controls={true} />
                </PlayerContainer>
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
