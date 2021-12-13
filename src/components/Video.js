import React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import SideBar from "./SideBar";

function Video({ url, channel, desc, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  //makes a reference to the video you are currently on
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <VideoContainer>
      <VideoPlayer>
        <video
          ref={videoRef}
          onClick={onVideoPress}
          src={url}
          width="100%"
          height="100%"
          loop
        ></video>
      </VideoPlayer>
      <Footer channel={channel} desc={desc} song={song} />
      <SideBar likes={likes} messages={messages} shares={shares} />
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
`;

const VideoPlayer = styled.div`
  width: 100%;
  height: 100%;
  object-fit: fill;
  background-color: black;
`;

export default Video;
