import { Fragment } from 'react';
import { skeleton } from '../../utils';
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

const LatestProject = ({ loading }: { loading: boolean }) => {
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
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        G@ther, my latest project...
                      </span>
                    )}
                  </h5>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LatestProject;
