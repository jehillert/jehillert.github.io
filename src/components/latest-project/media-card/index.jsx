import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const MediaCard = ({ description, url }) => {
  return (
    <div>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
                  {description}
                </h2>
                <ReactPlayer url={url} />
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
