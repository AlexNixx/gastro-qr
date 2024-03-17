import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, TextField } from 'nixx-ui';
import { z } from 'zod';

import cls from './Login.module.scss';

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
  remember: z.boolean()
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

interface LoginFormProps {
  onSubmit: (formValues: LoginFormValues) => void;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema)
  });

  const onFormSubmit: SubmitHandler<LoginFormValues> = formValue => {
    onSubmit(formValue);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className={cls.loginForm}>
      <Controller
        control={control}
        name='email'
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            autofocus
            label='Email address'
            value={value}
            onChange={onChange}
            disabled={isSubmitting}
            errorMessage={error?.message}
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
          />
        )}
      />
      <Controller
        control={control}
        name='remember'
        defaultValue={true}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Checkbox
            checked={value}
            onChange={(_, checked) => onChange(checked)}
          >
            Remember me
          </Checkbox>
        )}
      />
      <Button
        fullWidth
        size='lg'
        type='submit'
        isLoading={isSubmitting}
        className={cls.button}
      >
        Login
      </Button>
    </form>
  );
};
