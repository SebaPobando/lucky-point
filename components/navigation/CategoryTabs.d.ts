import React from 'react';

export interface CategoryTab { id: string; label: string; }
/**
 * @startingPoint section="Navigation" subtitle="Scrollable carta category pills" viewport="700x90"
 */
export interface CategoryTabsProps {
  /** Array of strings or { id, label } objects. */
  tabs: (string | CategoryTab)[];
  /** Active tab id / string. */
  active: string;
  onChange?: (id: string) => void;
}
export declare function CategoryTabs(props: CategoryTabsProps): JSX.Element;
