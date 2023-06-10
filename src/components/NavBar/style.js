import styled from "styled-components"

export const NavBarStyleWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.75rem;
  background-color: #283347;
  /* font-size: 1.25rem; */
  /* color: #b0bbc9; */
  /* width: 75rem;
  color: ${(props) => props.theme.mainColor};
  height: 3.75rem ;
  background-color: #283347; */
  .navBar-wrap{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 40px;
    margin: auto;
    line-height: 40px;
    /* background-color: red; */
    .navBar-name{
      color: #c7caca;
    }
    .navBar-list-wrap{
      ul{
        display: flex;
        li{
          width: 60px;
          color: ${props => props.theme.mainColor};
          cursor: pointer;
          text-align: center;
        }
        .active-nabBar{
          color: red;
        }
      }
    }
}
`