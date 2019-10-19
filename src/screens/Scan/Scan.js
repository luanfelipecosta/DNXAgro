import React from 'react';
import {Text} from 'react-native';
import {Field} from 'formik';
import {AvoidingKeyboardWrapper, StyledLogo, PermissionWarning} from './styles';
import Card from '../../components/Card';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

export default function Login(props) {
  const {
    isSubmitting,
    handleSubmit,
    hasCameraPermissions,
    requestPermission,
  } = props;

  return (
    <AvoidingKeyboardWrapper>
      <StyledLogo />

      <Card>
        {!hasCameraPermissions && (
          <>
            <PermissionWarning />
            <Button text="CONCEDER PERMISSÕES" onPress={requestPermission} />
          </>
        )}
        <Button loading={isSubmitting} text="ENTRAR" onPress={handleSubmit} />
      </Card>
    </AvoidingKeyboardWrapper>
  );
}
