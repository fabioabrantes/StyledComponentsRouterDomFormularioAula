import { useNavigate } from 'react-router-dom';
import {
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  TaskInput
}
  from './styled';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


import { schemaValidationPomodoro, pomodoroCycleType } from '../../utils/validateFormPomodoro';

import { Button } from '../../components/Button';

export function Home() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors }, } = useForm<pomodoroCycleType>({
      resolver: zodResolver(schemaValidationPomodoro)
    });

  const navigation = useNavigate();
  const fieldCompleted = watch("nameTask") && watch("minutesAmount");

  function handleCreateTaskCyclePomodoro(data: pomodoroCycleType) {
    reset();
    navigation('/history', {
      state: {
        nameTask: data.nameTask
      }
    })
  }


  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateTaskCyclePomodoro)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            placeholder="Dê um nome para o sua tarefa"
            {...register("nameTask")}
          />
          {errors.nameTask && <span>error no nome da tarefa</span>}
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            {...register("minutesAmount")}
          />
          {errors.minutesAmount && <span>error: minuto inválido</span>}
          <span>minutos.</span>
        </FormContainer>

        {/* <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer> */}

        <Button type="submit" cor='success' name='Começar' disabled={!fieldCompleted} />
      </form>

    </HomeContainer>
  )
}