import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
import MediaCard from './media-card';
import ReactPlayer from 'react-player';
import videoFilePath from '../../assets/actions_column.mp4';

const LatestProject = ({ loading }) => {
  const videoUrls = [
    {
      fileName: 'Actions Column',
      url: './actions_column.mp4',
    },
    {
      fileName: 'Adaptive Actions Overlay',
      url: 'https://youtube.com/shorts/Jx-1rkimSIA?feature=share',
    },
    {
      fileName: 'Transform and Markup Word docs',
      url: 'https://youtube.com/shorts/kchach5qw4E',
    },
    {
      fileName: 'Markup Webpages',
      url: 'https://youtube.com/shorts/8VT2nJDQ--M?feature=share',
    },
    {
      fileName: 'Customizable Editor Toolbar',
      url: 'https://youtube.com/shorts/fzHn9oDTXIo?feature=share',
    },
    {
      fileName: 'App Navigation',
      url: 'https://youtube.com/shorts/yJfrGHjYzg4?feature=share',
    },
    {
      fileName: 'Draggable Cardlist',
      url: 'https://youtube.com/shorts/lr7At9tsiyU?feature=share',
    },
    {
      fileName: 'reanimated-paging-dot',
      url: 'https://youtube.com/shorts/V_1qden3T8I?feature=share',
    },
    {
      fileName: 'Resizable Bottom Sheet w Media',
      url: 'https://youtube.com/shorts/-NhOPxia8X8?feature=share',
    },
    {
      fileName: 'Sticky Header, Sticky Footer',
      url: 'https://youtube.com/shorts/VVG4olQmU3o?feature=share',
    },
    {
      fileName: 'Sharing Images',
      url: 'https://youtube.com/shorts/Be08P0iFKvw?feature=share',
    },
    {
      fileName: 'Sharing Text',
      url: 'https://youtube.com/shorts/qVV6jQDbdTI?feature=share',
    },
    {
      fileName: 'Miscellaneous UI',
      url: 'https://www.youtube.com/watch?v=6SY7nuykcDM',
    },
  ];

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
                  <ReactPlayer
                    url={videoFilePath}
                    width="100%"
                    height="100%"
                    controls={true}
                  />
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videoUrls.map(({ fileName, url }, index) => {
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
