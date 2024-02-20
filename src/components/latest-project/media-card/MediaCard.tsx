import ReactPlayer from 'react-player';
import styled from 'styled-components';

const CardBody = styled.div`
  display: flex;
  align-items: center;
`;

const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Player = styled(ReactPlayer)``;

type Props = {
  displayText: string;
  url: string;
};

const MediaCard = ({ displayText, url }: Props) => {
  return (
    <div className="card compact bg-base-100 shadow bg-opacity-40">
      <CardBody className="card-body">
        <h2 className="font-semibold text-lg tracking-wide text-center opacity-60 mb-2">
          {displayText}
        </h2>
        <PlayerContainer>
          <Player url={url} width="100%" controls={true} />
        </PlayerContainer>
      </CardBody>
    </div>
  );
};

export default MediaCard;
