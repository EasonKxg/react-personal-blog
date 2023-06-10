import React, { memo } from "react";
import store from "store";
import { changeTheme } from "store/theme";
import { HomeStyleWrap } from "./style";
const Home = memo(() => {
  function handleChangeThemeClick() {
    store.dispatch(changeTheme());
  }
  return (
    <HomeStyleWrap>
      <button onClick={handleChangeThemeClick}>更改颜色</button>
      <hr />
      <span className="name">Home</span>
    </HomeStyleWrap>
  );
});

export default Home;
