import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {material} from 'react-native-typography';
import Logo from '../../components/Logo';
import {Colors} from '../../constants';
import QRCODE from '../../../assets/qr.jpg';

export const AvoidingKeyboardWrapper = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    paddingTop: 10,
    paddingBottom: 40,
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

export const Title = styled.Text({
  ...material.title,
  color: Colors.Primary,
  textAlign: 'center',
  alignSelf: 'center',
  marginBottom: 16,
});

export const Description = styled.Text({
  ...material.body,
  color: Colors.Gray,
  textAlign: 'center',
  alignSelf: 'center',
  marginBottom: 16,
});

export const CenteredContent = styled.View({
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: 1,
  paddingVertical: 16,
});

export const ScanWarning = styled.Text.attrs({
  children:
    'A leitura será feita automaticamente assim que o QRCode for posicionado no leitor.',
})({
  ...material.body1,
  textAlign: 'center',
  alignSelf: 'center',
  marginHorizontal: 10,
  color: Colors.White,
});

export const FakeQR = styled.Image.attrs({
  source: QRCODE,
})({
  width: 90,
  height: 90,
});

export const Row = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const ExitButton = styled.TouchableOpacity.attrs({activeOpacity: 0.9})(
  {},
);

export const ExitLabel = styled.Text({
  ...material.title,
  color: Colors.White,
  marginTop: 24,
});
