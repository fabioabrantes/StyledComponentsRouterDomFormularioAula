import { useEffect, useState } from "react";
import { HistoryContainer, HistoryList, Status } from "./styled";
import { useLocation } from "react-router-dom";
export function History() {
  const [nameTask, setNameTask] = useState("");
  const location = useLocation();
  const task = location.state ? location.state.nameTask : "Tarefa";

  useEffect(() => {
    setNameTask(task);
  }, [task]);

  return (
    <HistoryContainer>
      <h1>Meu histórico do {nameTask}</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="yellow500"><span></span> Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="red500"><span></span> concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="red500"><span></span> concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="red500"><span></span> concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}