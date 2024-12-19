import { Scroll, Timer } from 'phosphor-react';
import logoIFPB from '../../assets/LogoIFPB.png';

import { HeaderContainer, Menu, NavLink } from "./styled";

export function Header(){

  return (
    <HeaderContainer>
      <span>
        <img src={logoIFPB} alt="" />
      </span> 
      <Menu>
        <NavLink to="/home" title="home" >
          <Timer size={24} />
        </NavLink>
        <NavLink to='/history'title="histórico">
          <Scroll size={24} />
        </NavLink>
      </Menu>
    </HeaderContainer>
  )
}
