import styled from 'styled-components/native';
import {Colors} from '../../constants';
import {material} from 'react-native-typography';

export const StyledButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})(({disabled}) => ({
  backgroundColor: disabled ? Colors.PrimaryDisabled : Colors.Primary,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 16,
  borderRadius: 100,
  paddingHorizontal: 48,
}));

export const ButtonText = styled.Text({
  ...material.subheading,
  color: Colors.White,
  fontWeight: 900,
});

export const Loader = styled.ActivityIndicator.attrs({
  color: Colors.White,
})({});
// <Text style={material.display4}>Hello Material!</Text>

// export const StyledTextInput = styled.TextInput.attrs({
//   underlineColorAndroid: 'transparent',
//   focused: true,
// })(({focused}) => ({
//   borderBottomWidth: 2,
//   height: 41,
//   paddingLeft: 16,
//   borderBottomColor: focused ? Colors.Primary : Colors.Gray,
//   backgroundColor: Colors.Smoke,
//   alignSelf: 'stretch',
//   marginTop: 4,
//   marginBottom: 6,
// }));

// export const Label = styled.Text({
//   ...material.caption,
//   color: Colors.Gray,
//   marginLeft: 8,
// });

// export const Wrapper = styled.View({
//   alignSelf: 'stretch',
//   marginBottom: 16,
// });
