import { RegisterForm, RegisterFormValues } from '../register-form';

export const RegisterRoot = () => {
  const onSubmit = (formValues: RegisterFormValues) => {
    console.log(formValues);
  };

  return <RegisterForm onSubmit={onSubmit} />;
};
