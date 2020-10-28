import React from 'react'
import { 
  Container, 
  Form, 
  FormButton, 
  FormContent, 
  FormH1, 
  FormInput, 
  FormLabel, 
  FormWrap, 
  Icon, 
  Text 
} from './SigninElements'

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">bit Bank</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Entrar na conta</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type="email" required />

            <FormLabel htmlFor='for' required>Senha</FormLabel>
            <FormInput type='password' required />

            <FormButton type='submit'>Continuar</FormButton>
            <Text>Esqueci a senha</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
