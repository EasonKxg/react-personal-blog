import React, { memo } from "react";
import NavBar from "components/NavBar/NavBar";
import { HomeStyleWrap } from "./style";

const Home = memo(() => {
  return (
    <HomeStyleWrap>
      <NavBar />
    </HomeStyleWrap>
  );
});

export default Home;
