import React, { memo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import ThemeType from "styles/theme/src/types";
import Light from "styles/theme/src/colors/light";
import Dark from "styles/theme/src/colors/dark";

const ThemeProviderWrap = memo((props) => {
  const { theme } = useSelector((store) => {
    return {
      theme: store.themModule.theme,
    };
  });
  // console.log(theme === ThemeType.Light ? Dark : Light);
  return (
    <ThemeProvider
      theme={theme === ThemeType.Light ? Light : Dark}
      {...props}
    ></ThemeProvider>
  );
});

export default ThemeProviderWrap;
