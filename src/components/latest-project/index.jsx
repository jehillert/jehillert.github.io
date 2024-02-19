import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { skeleton } from '../../helpers/utils';
import { MediaCarousel } from './media-carousel/MediaCarousel';
import styled from 'styled-components';
import MediaCard from './media-card';
import customizable_toolbar from '../../assets/customizable_toolbar.mp4';
import vid_actions_column from '../../assets/vid_actions_column.mp4';
import vid_adaptive_actions_overlay from '../../assets/vid_adaptive_actions_overlay.mp4';
import vid_convert_webpage_to_document from '../../assets/vid_convert_webpage_to_document.mp4';
import vid_document_navigation from '../../assets/vid_document_navigation.mp4';
import vid_draggable_cardlist from '../../assets/vid_draggable_cardlist.mp4';
import vid_resizable_bottom_sheet from '../../assets/vid_resizable_bottom_sheet.mp4';
import vid_share_image from '../../assets/vid_share_image.mp4';
import vid_share_text from '../../assets/vid_share_text.mp4';
import vid_sticky_header_footer from '../../assets/vid_sticky_header_footer.mp4';

const paths = [
  { displayText: 'Customizable Toolbar', url: customizable_toolbar },
  { displayText: 'Adaptive Overlay', url: vid_adaptive_actions_overlay },
  { displayText: 'Action Column', url: vid_actions_column },
  {
    displayText: 'Document Conversion I',
    url: vid_convert_webpage_to_document,
  },
  { displayText: 'Document Navigation', url: vid_document_navigation },
  { displayText: 'Draggable Cardlist', url: vid_draggable_cardlist },
  { displayText: 'Resizable Bottom Sheet', url: vid_resizable_bottom_sheet },
  { displayText: 'Share Image', url: vid_share_image },
  { displayText: 'Share Text', url: vid_share_text },
  { displayText: 'Sticky Header/Footer', url: vid_sticky_header_footer },
];

const ProjectCardBody = styled.div``;
const CardTitle = styled.h5``;

const LatestProject = ({ loading }) => {
  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <ProjectCardBody className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <CardTitle className="card-title">
                    {loading ? (
                      skeleton({ width: 'w-40', height: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        G@ther, my latest project...
                      </span>
                    )}
                  </CardTitle>
                </div>
                <div>
                  <MediaCarousel />
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {paths.map(({ displayText, url }, index) => {
                      return (
                        <div key={index}>
                          <MediaCard url={url} displayText={displayText} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ProjectCardBody>
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

/*
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
*/
