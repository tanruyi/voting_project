/** @format */
import React from "react";
import { Button } from "@mui/material";

// import placeholder_img from "../assets/reviewsdp.png";

export default function character(props: any) {
  const handleVoteClick = () => {};

  return (
    <div className="character_component">
      {/* <img
        className="voting_image"
        src={placeholder_img}
        alt="placeholder-image"
      /> */}
      <h1>100%</h1>
      <h2>Name</h2>
      <Button variant="contained" size="large" onClick={handleVoteClick}>
        Vote
      </Button>
    </div>
  );
}
