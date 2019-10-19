import React from 'react';
import {Text} from 'react-native';
import {Field} from 'formik';
import {AvoidingKeyboardWrapper, StyledLogo} from './styles';
import Card from '../../components/Card';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

export default function Login(props) {
  const {isSubmitting, handleSubmit} = props;

  return (
    <AvoidingKeyboardWrapper>
      {/* <Text>{JSON.stringify(props, null, 2)}</Text> */}
      <StyledLogo />
      <Card>
        <Field
          returnKeyType="done"
          name="usuario"
          autoCapitalize="none"
          label="Usuário"
          component={TextInput}
        />

        <Field
          returnKeyType="done"
          name="senha"
          autoCapitalize="none"
          label="Senha"
          component={TextInput}
          secureTextEntry
        />

        <Button loading={isSubmitting} text="ENTRAR" onPress={handleSubmit} />
      </Card>

      {/* <Text>{JSON.stringify(props, null, 2)}</Text> */}
    </AvoidingKeyboardWrapper>
  );
}
