import { useState, useEffect } from "react";
import styled from "styled-components";
import Video from "./components/Video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => doc.data()));
    });
  }, [videos]);
  return (
    <Container>
      <AppVideos>
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </AppVideos>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  scroll-snap-type: y mandatory;
  background-color: black;

  &::webkit-scrollbar {
    display: none;
  }
`;

const AppVideos = styled.div`
  position: relative;
  height: 800px;
  max-width: 500px;
  width: 80%;
  border-radius: 20px;
  scroll-snap-type: y mandatory;
  overflow: scroll;

  &::webkit-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
export default App;
