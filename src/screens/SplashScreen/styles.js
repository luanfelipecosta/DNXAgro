import styled from 'styled-components/native';
import {Colors} from '../../constants';
import LOGO from '../../../assets/logo.png';

export const Container = styled.View({
  backgroundColor: Colors.primary,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export const Logo = styled.Image.attrs({
  source: LOGO,
  resizeMode: 'contain',
  width: 300,
})``;
