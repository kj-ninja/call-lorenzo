import {FC} from 'react';
import StyledNavbar from "./styles";

interface Props {
  navigation: string[];
}

const Navbar: FC<Props> = ({navigation}) => {
  return (
    <StyledNavbar>
      <ul>
        {navigation.map(link => (
          <li key={link}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;

// import React, {useState} from "react";
// import {
//   NavbarContainer,
//   LeftContainer,
//   RightContainer,
//   NavbarExtendedContainer,
//   NavbarInnerContainer,
//   NavbarLinkContainer,
//   NavbarLink,
//   OpenLinksButton,
//   NavbarLinkExtended,
// } from "./styles";
//
// function Navbar() {
//   const [extendNavbar, setExtendNavbar] = useState(false);
//
//   return (
//     <NavbarContainer extendNavbar={extendNavbar}>
//       <NavbarInnerContainer>
//         <LeftContainer>
//           <NavbarLinkContainer>
//             <NavbarLink> Home</NavbarLink>
//             <NavbarLink> Products</NavbarLink>
//             <NavbarLink> Contact Us</NavbarLink>
//             <NavbarLink> About Us</NavbarLink>
//             <OpenLinksButton
//               onClick={() => {
//                 setExtendNavbar((curr) => !curr);
//               }}
//             >
//               {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
//             </OpenLinksButton>
//           </NavbarLinkContainer>
//         </LeftContainer>
//         <RightContainer>
//           <h1>Logo</h1>
//         </RightContainer>
//       </NavbarInnerContainer>
//       {extendNavbar && (
//         <NavbarExtendedContainer>
//           <NavbarLinkExtended > Home</NavbarLinkExtended>
//           <NavbarLinkExtended> Products</NavbarLinkExtended>
//           <NavbarLinkExtended> Contact Us</NavbarLinkExtended>
//           <NavbarLinkExtended> About Us</NavbarLinkExtended>
//         </NavbarExtendedContainer>
//       )}
//     </NavbarContainer>
//   );
// }
//
// export default Navbar;