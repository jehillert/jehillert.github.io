import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
import { videoPaths } from '../../assets/video-links';
import MediaCard from './media-card';

const LatestProject = ({ loading }) => {
  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ width: 'w-40', height: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        G@ther, my latest project...
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videoPaths.map(({ fileName, url }, index) => {
                      return (
                        <div key={index}>
                          <MediaCard url={url} description={fileName} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

LatestProject.propTypes = {
  externalProjects: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

export default LatestProject;
