import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface VideoChatCardProp {
  peer: any;
}

const VideoChatCard = ({ peer }: VideoChatCardProp) => {
  const ref = useRef(null);

  useEffect(() => {
    peer.on("stream", (stream) => {
      ref.current.srcObject = stream;
    });
    peer.on("track", (track, stream) => {});
  }, [peer]);

  return <Video playsInline autoPlay ref={ref} />;
};

const Video = styled.video``;
export default VideoChatCard;
