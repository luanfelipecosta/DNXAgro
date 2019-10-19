import styled from 'styled-components/native';
import Logo from '../../components/Logo';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Colors} from '../../constants';
import {material} from 'react-native-typography';

export const AvoidingKeyboardWrapper = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
})({
  backgroundColor: Colors.Primary,
});

export const StyledLogo = styled(Logo)({
  width: '40%',
  height: 80,
  marginBottom: 30,
});

export const PermissionWarning = styled.Text.attrs({
  children: 'Para escanear um QRCode são necessárias as permissões da camêra',
})({
  ...material.body1,
  textAlign: 'center',
  alignSelf: 'center',
  marginBottom: 16,
});
