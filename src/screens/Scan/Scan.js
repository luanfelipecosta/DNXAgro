/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Field} from 'formik';
import {
  AvoidingKeyboardWrapper,
  StyledLogo,
  PermissionWarning,
  Row,
  Title,
  FakeQR,
  Description,
  ExitButton,
  ExitLabel,
} from './styles';
import Card from '../../components/Card';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import CodeScanner from './CodeScanner';
import {Colors} from '../../constants';

export default function Scan(props) {
  const {
    exit,
    isSubmitting,
    handleSubmit,
    setOperation,
    hasCameraPermissions,
    requestPermission,
    onBarCodeScanned,
    cameraOpen,
    toggleCamera,
    QRCode,
    values,
  } = props;

  const _handleOperation = operation => {
    setOperation(operation);
    handleSubmit();
  };

  const renderLackOfPermission = () => (
    <>
      <PermissionWarning />
      <Button text="PERMITIR USO" onPress={requestPermission} />
    </>
  );
  const renderContent = () => (
    <>
      <Title>{QRCode ? `CX-${QRCode}` : 'Bem Vindo'}</Title>
      {QRCode ? (
        <>
          <FakeQR />
          <Field
            returnKeyType="done"
            autoCapitalize="none"
            name="valor"
            label="Peso"
            component={TextInput}
          />

          <Button
            disabled={!values.valor}
            loading={isSubmitting}
            text="COLETAR"
            onPress={() => _handleOperation('coletar')}
          />
          <Button
            loading={isSubmitting}
            text="ASPIRAR"
            style={{marginTop: 32}}
            onPress={() => _handleOperation('aspirar')}
          />
          <Button
            loading={isSubmitting}
            text="CONSULTAR"
            style={{marginTop: 16}}
            onPress={() => _handleOperation('consultar')}
          />
        </>
      ) : (
        <Description>
          Comece escaneando um QRCode para ver as opções.
        </Description>
      )}

      <Button
        style={{
          marginTop: 48,
          backgroundColor: !QRCode ? Colors.Primary : Colors.Red,
        }}
        text={QRCode ? 'LIMPAR' : 'ESCANEAR QR CODE'}
        onPress={() => toggleCamera(true)}
      />
    </>
  );

  if (cameraOpen) {
    return (
      <CodeScanner
        closeCamera={() => toggleCamera(false)}
        onBarCodeScanned={onBarCodeScanned}
      />
    );
  }

  return (
    <AvoidingKeyboardWrapper>
      <Row>
        <StyledLogo />
        <ExitButton onPress={exit}>
          <ExitLabel>SAIR</ExitLabel>
        </ExitButton>
      </Row>
      <Card>
        {hasCameraPermissions ? renderContent() : renderLackOfPermission()}
      </Card>
    </AvoidingKeyboardWrapper>
  );
}
