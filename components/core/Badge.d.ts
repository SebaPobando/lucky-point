import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'forest' | 'gold' | 'dark' | 'danger';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
