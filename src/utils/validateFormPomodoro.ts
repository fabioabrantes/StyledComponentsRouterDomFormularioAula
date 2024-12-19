import {z} from 'zod';


export const schemaValidationPomodoro = z.object({
  nameTask: z.string().
          trim().
          min(2,'nome da tarefa deve ter no minimo 3 caracteres')
          .refine((value)=> value.length !== 0,{message:'error:campo vazio'})
          .transform(val => val.toUpperCase()),
  minutesAmount: z.coerce.number().min(5,"error:numero menor que 5").max(60,'errro:numero maior aue 60')
});

export type pomodoroCycleType = z.infer<typeof schemaValidationPomodoro>;