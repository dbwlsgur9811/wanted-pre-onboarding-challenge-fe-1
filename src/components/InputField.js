import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from 'antd';
import { ErrorMessage } from '@hookform/error-message';

/* eslint-disable react/jsx-props-no-spreading */

function InputField({ control, errors, name, label, disabled }) {
  return (
    <section className="inputField">
      <label htmlFor={name} className="label">
        {label}
        {' :'}
      </label>
      <Controller control={control} name={name} render={({ field }) => <Input className="input" disabled={disabled} {...field} />} />
      <ErrorMessage errors={errors} name={name} render={({ message: validMessage }) => <p style={{ color: 'red' }}>{validMessage}</p>} />
    </section>
  );
}

export default InputField;
