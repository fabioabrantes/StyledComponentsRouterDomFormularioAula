import styled from 'styled-components';

interface ButtonProps {
  corbackground: 'danger' | 'success';
}

export const ButtonStyled = styled.button<ButtonProps>`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:0.5rem;

  border-radius:8px;

  width:160px;
  height: 56px;

  background-color:${(params) => params.corbackground === "success" ?
    params.theme.COLORS.green300 : params.theme.COLORS.red500};
`;