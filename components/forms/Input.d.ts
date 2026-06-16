import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — replaces hint and turns the field red. */
  error?: string;
  /** Leading icon inside the field. */
  iconLeft?: React.ReactNode;
}
export declare function Input(props: InputProps): JSX.Element;
