import styled from 'styled-components/native';
import {Colors} from '../../constants';
import {material} from 'react-native-typography';

// <Text style={material.display4}>Hello Material!</Text>

export const StyledTextInput = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  focused: true,
})(({focused}) => ({
  borderBottomWidth: 2,
  height: 41,
  paddingLeft: 16,
  borderBottomColor: focused ? Colors.Primary : Colors.Gray,
  backgroundColor: Colors.Smoke,
  alignSelf: 'stretch',
  marginTop: 4,
  marginBottom: 6,
}));

export const Label = styled.Text({
  ...material.caption,
  color: Colors.Gray,
  marginLeft: 8,
});

export const Wrapper = styled.View({
  alignSelf: 'stretch',
  marginBottom: 16,
});
