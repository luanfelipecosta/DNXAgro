import React from 'react';
// import {Linking} from 'react-native';
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

  if (cameraOpen) {
    return (
      <CodeScanner
        closeCamera={() => toggleCamera(false)}
        onBarCodeScanned={onBarCodeScanned}
      />
    );
  }

  const handleOperation = operation => {
    setOperation(operation);
    handleSubmit();
  };

  const renderLackOfPermission = () => (
    <>
      <PermissionWarning />
      <Button text="PERMITIR USO" onPress={requestPermission} />
    </>
  );

  const renderCardTitle = () => (
    <Title>{QRCode ? `CX-${QRCode}` : 'Bem Vindo'}</Title>
  );

  return (
    <AvoidingKeyboardWrapper>
      <Row>
        <StyledLogo />
        <ExitButton onPress={exit}>
          <ExitLabel>SAIR</ExitLabel>
        </ExitButton>
      </Row>
      <Card>
        {!hasCameraPermissions && renderLackOfPermission()}
        {renderCardTitle()}
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
              onPress={() => handleOperation('coletar')}
            />
            <Button
              loading={isSubmitting}
              text="ASPIRAR"
              style={{marginTop: 32}}
              onPress={() => handleOperation('aspirar')}
            />
            <Button
              loading={isSubmitting}
              text="CONSULTAR"
              style={{marginTop: 16}}
              onPress={() => handleOperation('consultar')}
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
      </Card>
    </AvoidingKeyboardWrapper>
  );
}
