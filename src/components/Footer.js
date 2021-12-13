import React from "react";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

function Footer() {
  return (
    <Container>
      <FooterText>
        <h3>@qazi</h3>
        <p>This is a dexcription</p>
        <MusicNoteIcon />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>hiiiiiii</h1>
            </>
          )}
        </Ticker>
      </FooterText>
      <FooterImage>
        <img
          src="https://static.thenounproject.com/png/934821-200.png"
          alt="Spinning Disk Record"
        />
      </FooterImage>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  bottom: 180px;
  display: flex;
  color: white;
`;

const FooterText = styled.div`
  flex: 1;
`;
const FooterImage = styled.div`
  img {
    height: 50px;
    width: 50px;
    filter: invert(1);
  }
`;

export default Footer;
