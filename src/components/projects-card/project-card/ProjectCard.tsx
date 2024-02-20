import { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';
import LazyImage from '../../lazy-image';
import { ga, skeleton } from '../../../utils';
import { SanitizedExternalProject } from '../../../interfaces/sanitized-config';

type ProjectCardProps = {
  children?: ReactNode;
  data: SanitizedExternalProject;
  googleAnalyticId?: string;
  id: number;
};

const commonViewClasses = `card shadow-lg compact bg-base-100`;

const SkeletonCardView = styled.div.attrs<{ $isSkeleton?: boolean }>({
  className: commonViewClasses,
})``;

const ProjectCardAnchorView = styled.a.attrs<{ $isSkeleton?: boolean }>({
  className: `${commonViewClasses} cursor-pointer`,
})``;

const SizingView = styled.div.attrs({
  className: 'p-8 h-full w-full',
})``;

const AlignView = styled.div.attrs({
  className: 'flex items-center flex-col',
})``;

const gatherTextTsx = (
  <>
    <p className="my-4">
      G@ther is a mobile phone research utility. It is where you put all your
      thoughts, bookmarks, documents, comments and copied text as you explore
      something you are interested in on the web, or review documents on your
      device. The point is to collect fast, semi-organized as you are still
      trying to understand something. Then have everything handy when you start
      to outline and synthesize your thoughts.
    </p>
    <p className="my-4">
      The app is broken up into different tools that are integrated with each
      other to minimize mental friction, but still be useful individually. So
      while it's great for research, G@ther is also great as a note taking
      utility, a document reviewer, a place to store bookmarks and things you
      don't want to forget, and so on.
    </p>
    <p className="my-4">
      This project is all my own work, and it comprises the following
      architecture and technologies:
    </p>
    <ul>
      <li className="my-4">
        • A mobile client built with React Native and TypeScript, with state
        management managed by redux and redux-toolkit. Because the app has a lot
        of data structures and is CRUD-heavy, redux-toolkit's
        createEntityAdapter and createSlice hooks are used extensively to
        maintain a relatively shallow normalized state tree.
      </li>
      <li className="my-4">
        • A React web app embedded in two different webviews: 1) A document
        review screen for highlighting and marking up webpages and documents
        that have been converted to HTML; 2) a document map view for the user to
        review and navigate search results and highlights and comments. The web
        app communicates over a bridge to stay synced with React Native, and
        uses Zustand for state management, since the requirements are simpler in
        the webview.
      </li>
      <li className="my-4">
        • A document transformation service hosted on Heroku that converts: 1)
        converts MS Word, pdf and text documents to HTML; 2) sanitizes the
        converted documents, and also documents shared to the app, to prevent
        viruses and XSS attacks. The service is built using Express.JS using a
        node runtime.
      </li>
      <li className="my-4">
        • Mobile deployment is handled by Bitrise, and the document
        transformation service is a simple deployment to Heroku. The web app was
        served from the node backend, but is now compiled into a single file and
        stored as an asset in the app build. This will prevent problems with
        versioning, and keep more of the app functional when the user does not
        have online access.
      </li>
    </ul>
  </>
);

const CardSkeleton = () => {
  const skeletonTitle = (
    <h2>
      {skeleton({
        widthCls: 'w-32',
        heightCls: 'h-8',
        className: 'mb-2 mx-auto',
      })}
    </h2>
  );

  const skeletonAvatar = (
    <div className="avatar w-full h-full py-4">
      <div className="w-20 h-20 mask mask-squircle mx-auto">
        {skeleton({
          widthCls: 'w-full',
          heightCls: 'h-full',
          shape: '',
        })}
      </div>
    </div>
  );

  const skeletonBody = (
    <>
      <div className="mt-2">
        {skeleton({
          widthCls: 'w-full',
          heightCls: 'h-4',
          className: 'mx-auto',
        })}
      </div>
      <div className="mt-2 flex items-center flex-wrap justify-center">
        {skeleton({
          widthCls: 'w-full',
          heightCls: 'h-4',
          className: 'mx-auto',
        })}
      </div>
    </>
  );

  return (
    <SkeletonCardView>
      <SizingView>
        <AlignView>
          <div className="w-full">
            <div className="flex items-start">
              <div className="w-full">
                {skeletonTitle}
                {skeletonAvatar}
                {skeletonBody}
              </div>
            </div>
          </div>
        </AlignView>
      </SizingView>
    </SkeletonCardView>
  );
};

const ProjectCard = ({
  children,
  data,
  googleAnalyticId,
  id,
}: ProjectCardProps) => {
  const projectTitle = (
    <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
      {data.title}
    </h2>
  );

  const projectDescription = (
    <p className="mt-1 text-base-content text-opacity-60 text-sm">
      {data.description}
    </p>
  );

  const projectGraphic = data.imageUrl && (
    <div className="avatar opacity-90 py-4">
      <div className="w-20 h-20 mask mask-squircle">
        <LazyImage
          src={data.imageUrl}
          alt={'thumbnail'}
          placeholder={skeleton({
            widthCls: 'w-full',
            heightCls: 'h-full',
            shape: '',
          })}
        />
      </div>
    </div>
  );

  const handlePressCard: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    try {
      if (googleAnalyticId) {
        ga.event('Click External Project', {
          post: data.title,
        });
      }
    } catch (error) {
      console.error(error);
    }

    window?.open(data.link, '_blank');
  };

  return (
    <ProjectCardAnchorView href={data.link} onClick={handlePressCard}>
      <SizingView>
        <AlignView>
          <div className="w-full">
            <div className="text-center w-full">
              {projectTitle}
              {projectGraphic}
            </div>
            {children}
            <div className="text-justify">
              {id === 0 ? gatherTextTsx : projectDescription}
            </div>
          </div>
        </AlignView>
      </SizingView>
    </ProjectCardAnchorView>
  );
};

export { CardSkeleton, ProjectCard };
