import React, { useState } from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";

function SideBar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  const [addLikes, setAddLikes] = useState(likes);

  const addLike = (e) => {
    setLiked(false);
    setAddLikes(addLikes - 1);
  };

  const removeLike = (e) => {
    setLiked(true);
    setAddLikes(addLikes + 1);
  };
  return (
    <Container>
      <SideBarButtons>
        {liked ? (
          <FavoriteIcon onClick={(e) => addLike(e)} />
        ) : (
          <FavoriteBorderIcon onClick={(e) => removeLike(e)} />
        )}
        <p>{addLikes}</p>
      </SideBarButtons>
      <SideBarButtons>
        <MessageIcon />
        <p>{shares}</p>
      </SideBarButtons>
      <SideBarButtons>
        <ShareIcon />
        <p>{messages}</p>
      </SideBarButtons>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 55%;
  right: 5px;
`;

const SideBarButtons = styled.div`
  text-align: center;
  margin: 20px;
  p {
    margin: 0;
  }
`;
export default SideBar;
