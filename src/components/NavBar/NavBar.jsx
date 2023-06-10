import React, { memo, useState } from "react";
import classNames from "classnames";
import { NavBarStyleWrap } from "./style";

const NavBar = memo(() => {
  const [activeNabBar, setActiveNabBar] = useState(0);
  console.log(activeNabBar);
  const navBarList = ["首页", "归档", "分类", "标签", "关于"];
  return (
    <NavBarStyleWrap>
      <div className="navBar-wrap">
        <div className="navBar-name">平凡即是喜乐</div>
        <div className="navBar-list-wrap">
          <ul>
            {navBarList.map((item, index) => {
              return (
                <li
                  key={item}
                  className={classNames("active-nabBar", activeNabBar === 0)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </NavBarStyleWrap>
  );
});

export default NavBar;
