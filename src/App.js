import styled from "styled-components";
import Video from "./components/Video";

function App() {
  return (
    <Container>
      <AppVideos>
        <Video />
        <Video />
        <Video />
        <Video />
      </AppVideos>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
  scroll-snap-type: y mandatory;
`;

const AppVideos = styled.div`
  position: relative;
  height: 800px;
  max-width: 500px;
  width: 80%;
  scroll-snap-type: y mandatory;
  overflow: scroll;
`;
export default App;
