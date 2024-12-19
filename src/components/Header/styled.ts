import styled from "styled-components";
import { NavLink as BaseNavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-between;
`;
export const Menu = styled.nav`
  display: flex;
  gap:1.2rem;
`;

export const NavLink = styled(BaseNavLink)`
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.COLORS.gray100};
      border-bottom: 3px solid transparent;

    &:hover{
      border-bottom: 3px solid ${(props) => props.theme.COLORS.green500};
    }
      
    &.active {
        color: ${(props) => props.theme.COLORS.green500};
      }
`;
