import styled from "styled-components";
import theme from "../../styles/theme";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    
    li {
      list-style-type: none;
      display: flex;
      align-items: center;
      white-space: nowrap;
      
      a {
        padding: 13px 5px;
        font-size: 13px;
        text-decoration: none;
        color: ${theme.colors.white}
      }
    }
  }
`;

export default StyledNavbar;

// import styled from "styled-components";
//
// interface INavbar {
//   extendNavbar: boolean;
// }
//
// export const NavbarContainer = styled.nav<INavbar>`
//   width: 100%;
//   height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
//   background-color: black;
//   display: flex;
//   flex-direction: column;
//   @media (min-width: 700px) {
//     height: 80px;
//   }
// `;
//
// export const LeftContainer = styled.div`
//   flex: 70%;
//   display: flex;
//   align-items: center;
//   padding-left: 5%;
// `;
//
// export const RightContainer = styled.div`
//   flex: 30%;
//   display: flex;
//   justify-content: flex-end;
//   padding-right: 50px;
// `;
//
// export const NavbarInnerContainer = styled.div`
//   width: 100%;
//   height: 80px;
//   display: flex;
// `;
//
// export const NavbarLinkContainer = styled.div`
//   display: flex;
// `;
//
// export const NavbarLink = styled.a`
//   color: white;
//   font-size: x-large;
//   font-family: Arial, Helvetica, sans-serif;
//   text-decoration: none;
//   margin: 10px;
//   @media (max-width: 700px) {
//     display: none;
//   }
// `;
//
// export const NavbarLinkExtended = styled.a`
//   color: white;
//   font-size: x-large;
//   font-family: Arial, Helvetica, sans-serif;
//   text-decoration: none;
//   margin: 10px;
// `;
//
// export const Logo = styled.img`
//   margin: 10px;
//   max-width: 180px;
//   height: auto;
// `;
//
// export const OpenLinksButton = styled.button`
//   width: 70px;
//   height: 50px;
//   background: none;
//   border: none;
//   color: white;
//   font-size: 45px;
//   cursor: pointer;
//   @media (min-width: 700px) {
//     display: none;
//   }
// `;
//
// export const NavbarExtendedContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   @media (min-width: 700px) {
//     display: none;
//   }
// `;