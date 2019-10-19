import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../../constants';

export default styled.View({
  // alignSelf: 'stretch',
  backgroundColor: Colors.White,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 16,
  paddingVertical: 32,
  borderRadius: 10,
  elevation: 5,
  shadowColor: Colors.Black,
  shadowOffset: {width: 0, height: 0},
  shadowOpacity: 0.3,
  shadowRadius: 16,
});
