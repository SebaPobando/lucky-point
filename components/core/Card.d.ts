import React from 'react';

/**
 * @startingPoint section="Surfaces" subtitle="Card surfaces: white, sand, dark, forest" viewport="700x260"
 */
export interface CardProps {
  children: React.ReactNode;
  /** Surface treatment. @default "plain" */
  variant?: 'plain' | 'sand' | 'dark' | 'forest';
  /** Adds hover lift for clickable cards. @default false */
  interactive?: boolean;
  /** Inner padding. @default "md" */
  pad?: 'none' | 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
