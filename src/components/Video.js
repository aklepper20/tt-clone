import React from "react";
import styled from "styled-components";

function Video() {
  return <VideoContainer>this is my video component</VideoContainer>;
}

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  scroll-snap-align: start;
`;

export default Video;
