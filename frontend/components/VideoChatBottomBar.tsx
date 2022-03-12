import React, { useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface VideoChatBottomBarProp {
  clickChat: any;
  clickCameraDevice: any;
  goToBack: any;
  toggleCameraAudio: any;
  userVideoAudio: any;
  clickScreenSharing: any;
  screenShare: any;
  videoDevices: any;
  showVideoDevices: any;
  setShowVideoDevices: any;
}

const VideoChatBottomBar = ({
  clickChat,
  clickCameraDevice,
  goToBack,
  toggleCameraAudio,
  userVideoAudio,
  clickScreenSharing,
  screenShare,
  videoDevices,
  showVideoDevices,
  setShowVideoDevices,
}: VideoChatBottomBarProp) => {
  const handleToggle = useCallback(
    (e) => {
      setShowVideoDevices((state) => !state);
    },
    [setShowVideoDevices]
  );

  return (
    <Bar>
      <Left>
        <CameraButton onClick={toggleCameraAudio} data-switch="video">
          {/* <div> */}
          {userVideoAudio.video ? (
            // <FaIcon className="fas fa-video"></FaIcon>
            <FontAwesomeIcon className="fas" icon="video"/>
          ) : (
            // <FaIcon className="fas fa-video-slash"></FaIcon>
            <FontAwesomeIcon className="fas" icon="video-slash" />
          )}
          {/* </div> */}
          {/* <div>Camera</div> */}
        </CameraButton>
        {showVideoDevices && (
          <SwitchList>
            {videoDevices.length > 0 &&
              videoDevices.map((device) => {
                return (
                  <div
                    key={device.deviceId}
                    onClick={clickCameraDevice}
                    data-value={device.deviceId}
                  >
                    {device.label}
                  </div>
                );
              })}
            <div>Switch Camera</div>
          </SwitchList>
        )}
        <SwitchMenu onClick={handleToggle}>
          {/* <i className="fas fa-angle-up"></i> */}
          <FontAwesomeIcon className="fas" icon="angle-up" style={{width: '12px'}}/>
        </SwitchMenu>
        <AudioButton onClick={toggleCameraAudio} data-switch="audio">
          <div>
            {userVideoAudio.audio ? (
              // <FaIcon className="fas fa-microphone"></FaIcon>
              <FontAwesomeIcon className="fas" icon="microphone" />
            ) : (
              // <FaIcon className="fas fa-microphone-slash"></FaIcon>
              <FontAwesomeIcon className="fas" icon="microphone-slash" />
            )}
          </div>
          {/* <div>Audio</div> */}
        </AudioButton>
      </Left>
      <Center>
        <ChatButton onClick={clickChat}>
          <div>
            {/* <FaIcon className="fas fa-comments"></FaIcon> */}
            <FontAwesomeIcon className="fas" icon="comments" />
          </div>
          {/* <div>Chat</div> */}
        </ChatButton>
        <ScreenButton onClick={clickScreenSharing}>
          <div>
            {/* <FaIcon
              className={`fas fa-desktop ${screenShare ? "sharing" : ""}`}
            ></FaIcon> */}
            <FontAwesomeIcon
              className={`fas ${screenShare ? "sharing" : ""}`}
              icon="desktop"
            />
          </div>
          {/* <div>Share Screen</div> */}
        </ScreenButton>
      </Center>
      <Right>
        <StopButton onClick={goToBack}>
          <FontAwesomeIcon className="fas" icon="circle-xmark" />
        </StopButton>
      </Right>
    </Bar>
  );
};

const Bar = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  // background-color: #4ea1d3;
  color: white;
  border-radius: 0.5rem;
`;
const Left = styled.div`
  display: flex;
  align-items: center;

  margin-left: 15px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Right = styled.div``;

const ChatButton = styled.div`
  width: 40px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }
`;

const ScreenButton = styled.div`
  width: auto;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }

  .sharing {
    color: #ee2560;
  }
`;

const FaIcon = styled.i`
  width: 30px;
  font-size: calc(16px + 1vmin);
`;

const StopButton = styled.div`
  width: 40px;
  height: 40px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;
  line-height: 30px;
  margin-right: 15px;
  // background-color: #ee2560;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: #f25483;
    cursor: pointer;
  }
`;

const CameraButton = styled.div`
  position: relative;
  width: 80px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px 1px 5px 5px;
  margin: 0 20px 0 5px;
  justify-content: center;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  .fa-microphone-slash {
    color: #ee2560;
  }

  .fa-video-slash {
    color: #ee2560;
  }
`;

const AudioButton = styled.div`
  position: relative;
  width: 40px;
  border: none;
  font-size: 0.9375rem;
  padding: 5px;
  margin: 5px;
  justify-content: center;

  :hover {
    background-color: #77b7dd;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  .fa-microphone-slash {
    color: #ee2560;
  }

  .fa-video-slash {
    color: #ee2560;
  }
`;

const SwitchMenu = styled.div`
  display: flex;
  position: absolute;
  width: 15px;
  padding: 1.5px;
  top: 7px;
  left: 80px;
  z-index: 1;

  :hover {
    background-color: #476d84;
    cursor: pointer;
    border-radius: 15px;
  }

  * {
    pointer-events: none;
  }

  > i {
    width: 90%;
    font-size: calc(10px + 1vmin);
  }
`;

const SwitchList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -85px;
  left: 80px;
  background-color: #4ea1d3;
  color: white;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  text-align: left;

  > div {
    font-size: 0.85rem;
    padding: 1px;
    margin-bottom: 5px;

    :not(:last-child):hover {
      background-color: #77b7dd;
      cursor: pointer;
    }
  }

  > div:last-child {
    border-top: 1px solid white;
    cursor: context-menu !important;
  }
`;

export default VideoChatBottomBar;
