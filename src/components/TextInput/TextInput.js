import React from 'react';
import {Label, StyledTextInput, Wrapper} from './styles';

export default function TextInput(props) {
  const {
    label,
    form: {errors, handleChange},
    field: {name: fieldName, value},
  } = props;

  const error = errors[fieldName];
  // const wasTouched = touched[fieldName];

  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledTextInput
        {...props}
        value={value}
        onChangeText={handleChange(fieldName)}
      />
      {error && <Label>{error}</Label>}
    </Wrapper>
  );
}
