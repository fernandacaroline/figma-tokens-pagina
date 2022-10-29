import React from 'react';
import { EuiColorPicker, EuiFormRow, useColorPickerState } from '@elastic/eui';

export const Demo = () => {
  const [color, setColor, errors] = useColorPickerState('#D36086');
  return (
    <EuiFormRow label="Pick a color" isInvalid={!!errors} error={errors}>
      <EuiColorPicker onChange={setColor} color={color} isInvalid={!!errors} />
    </EuiFormRow>
  );
};