import React from 'react';

export interface QtyStepperProps {
  /** Current quantity. @default 1 */
  value?: number;
  /** @default 1 */
  min?: number;
  /** @default 99 */
  max?: number;
  /** @default "md" */
  size?: 'sm' | 'md';
  onChange?: (value: number) => void;
}
export declare function QtyStepper(props: QtyStepperProps): JSX.Element;
