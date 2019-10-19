import styled from 'styled-components/native';
import Logo from '../../components/Logo';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Colors} from '../../constants';

export const AvoidingKeyboardWrapper = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
})({
  backgroundColor: Colors.Primary,
});

export const StyledLogo = styled(Logo)({
  height: 80,
  marginVertical: 30,
  alignSelf: 'center',
});
