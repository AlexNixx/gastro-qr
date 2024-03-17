import { LoginForm, LoginFormValues } from '../login-form';

export const LoginRoot = () => {
  const onSubmit = (formValues: LoginFormValues) => {
    console.log(formValues);
  };

  return <LoginForm onSubmit={onSubmit} />;
};
