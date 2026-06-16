import React from 'react';

/**
 * @startingPoint section="Coffee" subtitle="Carta row with dual price" viewport="700x130"
 */
export interface MenuItemProps {
  /** Product name (rendered in Handgoal display font). */
  name: string;
  /** Description line. */
  description?: string;
  /** Price in CLP. */
  clp: number;
  /** Optional corner tag, e.g. "Nuevo" / "Verano". */
  tag?: string;
  /** Show bottom hairline divider. @default true */
  divider?: boolean;
}
export declare function MenuItem(props: MenuItemProps): JSX.Element;
