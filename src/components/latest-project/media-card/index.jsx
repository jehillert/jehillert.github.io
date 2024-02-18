import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'styled-components';
import { Player } from 'video-react';

const PlayerViewDiv = styled.div`
  height: 500px;
`;

const MediaCard = ({ description, url }) => {
  const ref = useRef(null);

  return (
    <div>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <PlayerViewDiv>
                  <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
                    {description}
                  </h2>
                  <Player src={url} ref={ref} width={'33%'} fluid={false} />
                </PlayerViewDiv>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MediaCard.propTypes = {
  description: PropTypes.string,
  url: PropTypes.string,
};

export default MediaCard;
