import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextField } from 'nixx-ui';
import { z } from 'zod';

import cls from './Register.module.scss';

const registerFormSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(8).max(20),
    confirmPassword: z.string().min(8).max(20)
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords does not match'
  });

export type RegisterFormValues = z.infer<typeof registerFormSchema>;

interface LoginFormProps {
  onSubmit: (formValues: RegisterFormValues) => void;
}

export const RegisterForm = ({ onSubmit }: LoginFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema)
  });

  const onFormSubmit: SubmitHandler<RegisterFormValues> = formValue => {
    onSubmit(formValue);
    reset();
  };

  return (
    <div className={cls.registerWrapper}>
      <form onSubmit={handleSubmit(onFormSubmit)} className={cls.registerForm}>
        <div className={cls.row}>
          <Controller
            control={control}
            name='firstName'
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                autofocus
                label='First Name'
                value={value}
                onChange={onChange}
                disabled={isSubmitting}
                errorMessage={error?.message}
                autoComplete='off'
                className={cls.inputName}
              />
            )}
          />
          <Controller
            control={control}
            name='lastName'
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label='Last Name'
                value={value}
                onChange={onChange}
                disabled={isSubmitting}
                errorMessage={error?.message}
                autoComplete='off'
                className={cls.inputName}
              />
            )}
          />
        </div>
        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Email address'
              value={value}
              onChange={onChange}
              disabled={isSubmitting}
              errorMessage={error?.message}
              autoComplete='off'
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Password'
              value={value}
              type='password'
              onChange={onChange}
              disabled={isSubmitting}
              errorMessage={error?.message}
              autoComplete='off'
            />
          )}
        />
        <Controller
          control={control}
          name='confirmPassword'
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Confirm password'
              value={value}
              type='password'
              onChange={onChange}
              disabled={isSubmitting}
              errorMessage={error?.message}
              autoComplete='off'
            />
          )}
        />
        <Button
          size='lg'
          type='submit'
          isLoading={isSubmitting}
          className={cls.button}
        >
          Create account
        </Button>
      </form>
    </div>
  );
};
