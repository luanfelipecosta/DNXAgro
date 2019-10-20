import React from 'react';
import {ButtonText, StyledButton, Loader} from './styles';

export default function Button(props) {
  const {onPress, text, loading, disabled, style} = props;
  // const wasTouched = touched[fieldName];

  return (
    <StyledButton {...{disabled, onPress, style}}>
      {loading ? <Loader /> : <ButtonText>{text}</ButtonText>}
    </StyledButton>
  );
}
