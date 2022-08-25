import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from 'antd';
import { ErrorMessage } from '@hookform/error-message';

/* eslint-disable react/jsx-props-no-spreading */
const { TextArea } = Input;
function TextAreaField({ control, errors, name, label }) {
  return (
    <section className="textAreaField">
      <label htmlFor={name} className="label">
        {label}
        {' :'}
      </label>
      <Controller control={control} name={name} render={({ field }) => <TextArea className="textArea" {...field} />} />
      <ErrorMessage errors={errors} name={name} render={({ message: validMessage }) => <p style={{ color: 'red' }}>{validMessage}</p>} />
    </section>
  );
}

export default TextAreaField;
