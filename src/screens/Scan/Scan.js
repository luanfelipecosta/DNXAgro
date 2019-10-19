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
      <StyledLogo />

      <Card>
        <Button loading={isSubmitting} text="ENTRAR" onPress={handleSubmit} />
      </Card>
    </AvoidingKeyboardWrapper>
  );
}
