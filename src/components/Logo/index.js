import styled from 'styled-components/native';
import LOGO from '../../../assets/logo.png';

/*
 * same as <Image source={Logo} ... resizeMode="contain" />
 * styled.Image.attr ({ attributes }) ({ styles })
 */
export default styled.Image.attrs({
  source: LOGO,
  resizeMode: 'contain',
})({});
