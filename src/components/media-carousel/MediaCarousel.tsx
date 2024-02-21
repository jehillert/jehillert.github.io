import { useState } from 'react';
import BaseReactPlayer from 'react-player';
import { styled } from 'styled-components';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import {
  Swiper as BaseSwiper,
  SwiperSlide as BaseSwiperSlide,
} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ReactPlayer = styled(BaseReactPlayer)<{ $height: string }>`
  video {
    height: ${({ $height }) => $height};
  }
  .react-player__preview {
  }
  .react-player__shadow {
  }
  .react-player__play-icon {
  }
`;

const PlayerWrapper = styled.div<{ $height: string }>`
  display: flex;
  alight-items: center;
  height: ${({ $height }) => $height};
  width: 100%;
`;

const Swiper = styled(BaseSwiper)`
  width: 100%;
`;

const SwiperSlide = styled(BaseSwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 100%;

  .swiper-slide img {
    display: block;
  }
`;

type Props = {
  data: {
    id: string;
    src: string;
    alt: string;
  }[];
};

const MediaCarousel = ({ data }: Props) => {
  const [isPlaying, setIsPlaying] = useState(0);

  const $height = '100%';

  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      {data.map((slide) => (
        <SwiperSlide key={slide.id} className="swiper-slide">
          <PlayerWrapper $height={$height}>
            <ReactPlayer
              $height={$height}
              url={slide.src}
              controls={true}
              playing={isPlaying === 0}
              height={$height}
              width="100%"
            />
          </PlayerWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { MediaCarousel };
