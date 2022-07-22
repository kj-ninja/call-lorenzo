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