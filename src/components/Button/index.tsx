import { ButtonHTMLAttributes } from 'react';
import { Play } from 'phosphor-react';
import { ButtonStyled } from './styled';

interface ButtonProps extends ButtonHTMLAttributes<ButtonProps> {
  cor?: 'danger' | 'success';
  name: string;
}
export function Button({ cor = 'success', name, }: ButtonProps) {
  return (
    <ButtonStyled corbackground={cor}>
      <Play size={24} color="#E1E1E6" />

      <span style={{color:'white', fontWeight:'bold'}}>{name}</span>
    </ButtonStyled>
  )
}