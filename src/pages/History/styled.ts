import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.gray100};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto; /* gera uma barra de rolagem quando a tabela é maior que a tela */
  margin-top: 2rem;

  table {
    width: 100%;
    
    min-width: 600px; /* gera um scroll se for menor que isso */
    
    th {
      background-color: ${(props) => props.theme.COLORS.gray600};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.COLORS.gray100};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
      
    }
    
    td {
      background-color: ${(props) => props.theme.COLORS.gray700};
      border-top: 4px solid ${(props) => props.theme.COLORS.gray800};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      
      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;


interface StatusProps {
  statusColor:'green500' |'yellow500' |'red500';
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme.COLORS[props.statusColor]};
  }
`