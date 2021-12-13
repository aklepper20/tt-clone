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
        <FooterTicker>
          <FooterIcon>
            <MusicNoteIcon />
          </FooterIcon>

          <TickerContainer>
            <Ticker mode="smooth">
              {({ index }) => (
                <>
                  <p>hiiiiiii</p>
                </>
              )}
            </Ticker>
          </TickerContainer>
        </FooterTicker>
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
  margin-left: 40px;
  display: flex;
  color: white;
`;

const FooterText = styled.div`
  flex: 1;

  h3 {
    padding-bottom: 5px;
  }
`;

const FooterImage = styled.div`
  img {
    height: 50px;
    width: 50px;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 20px;
    margin-right: 10px;
    filter: invert(1);
  }
`;

const FooterTicker = styled.div``;
const FooterIcon = styled.div`
  position: absolute;
  margin-bottom: 5px;
`;
const TickerContainer = styled.div`
  height: fit-content;
  width: 100%;
  margin-left: 30px;

  p {
    margin: 0;
  }
`;
export default Footer;
