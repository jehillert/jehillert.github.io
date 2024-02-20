import { Fragment } from 'react';
import styled from 'styled-components';
import { MediaCarousel } from '../media-carousel/MediaCarousel';
import vid_share_text from '../../assets/vid_share_text.mp4';
import vid_share_image from '../../assets/vid_share_image.mp4';
import vid_actions_column from '../../assets/vid_actions_column.mp4';
import customizable_toolbar from '../../assets/customizable_toolbar.mp4';
import vid_draggable_cardlist from '../../assets/vid_draggable_cardlist.mp4';
import vid_document_navigation from '../../assets/vid_document_navigation.mp4';
import vid_sticky_header_footer from '../../assets/vid_sticky_header_footer.mp4';
import vid_resizable_bottom_sheet from '../../assets/vid_resizable_bottom_sheet.mp4';
import vid_adaptive_actions_overlay from '../../assets/vid_adaptive_actions_overlay.mp4';
import vid_convert_webpage_to_document from '../../assets/vid_convert_webpage_to_document.mp4';

const filePaths = [
  { alt: 'Customizable Toolbar', src: customizable_toolbar },
  { alt: 'Adaptive Overlay', src: vid_adaptive_actions_overlay },
  { alt: 'Action Column', src: vid_actions_column },
  {
    alt: 'Document Conversion I',
    src: vid_convert_webpage_to_document,
  },
  { alt: 'Document Navigation', src: vid_document_navigation },
  { alt: 'Draggable Cardlist', src: vid_draggable_cardlist },
  { alt: 'Resizable Bottom Sheet', src: vid_resizable_bottom_sheet },
  { alt: 'Share Image', src: vid_share_image },
  { alt: 'Share Text', src: vid_share_text },
  { alt: 'Sticky Header/Footer', src: vid_sticky_header_footer },
];

const CarouselContainer = styled.div`
  height: 500px;
  width: 500px;
  background-color: #00000079;
`;
const ProjectCardBody = styled.div``;

const LatestProject = ({ loading }: { loading: boolean }) => {
  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <ProjectCardBody className="card-body">
                <CarouselContainer>
                  <div className="col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <MediaCarousel data={filePaths} loading={loading} />
                    </div>
                  </div>
                </CarouselContainer>
              </ProjectCardBody>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LatestProject;
