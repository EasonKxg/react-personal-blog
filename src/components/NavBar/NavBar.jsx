import React, { memo, useState } from "react";
import classNames from "classnames";
import IconFont from "components/IconFont/IconFont";
import { NavBarStyleWrap } from "./style";

const NavBar = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);
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
                  className={classNames({
                    "active-nabBar": activeIndex === index,
                  })}
                  onClick={() => setActiveIndex(index)}
                >
                  {item}
                </li>
              );
            })}
            <li>
              <IconFont type="icon-sousuo" />
            </li>
          </ul>
        </div>
      </div>
    </NavBarStyleWrap>
  );
});

export default NavBar;
