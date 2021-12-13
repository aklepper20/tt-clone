import React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import SideBar from "./SideBar";

function Video() {
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
          src="https://www.tiktok.com/@my_vanh/video/7033354984381107482?is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=7041265399476864517"
          width="100%"
          height="100%"
          loop
        ></video>
      </VideoPlayer>
      <Footer channel="aly baez" desc="wow i love to dance" song="say so" />
      <SideBar />
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  scroll-snap-align: start;
`;

const VideoPlayer = styled.div`
  width: 100%;
  height: 100%;
  object-fit: fill;
  background-color: red;
`;

export default Video;
