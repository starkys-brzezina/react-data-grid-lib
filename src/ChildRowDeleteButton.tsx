import * as React from 'react';
import classNames from 'classnames';

export interface ChildRowDeleteButtonProps {
  treeDepth: number;
  cellHeight: number;
  siblingIndex: number;
  numberSiblings: number;
  onDeleteSubRow(): void;
  isDeleteSubRowEnabled: boolean;
  allowAddChildRow?: boolean;
}

export default function ChildRowDeleteButton({ treeDepth, cellHeight, siblingIndex, numberSiblings, onDeleteSubRow, isDeleteSubRowEnabled, allowAddChildRow = true }: ChildRowDeleteButtonProps) {
  const lastSibling = siblingIndex === numberSiblings - 1;
  const className = classNames(
    { 'rdg-child-row-action-cross': allowAddChildRow === true || !lastSibling },
    { 'rdg-child-row-action-cross-last': allowAddChildRow === false && (lastSibling || numberSiblings === 1) }
  );
  const height = 12;
  const width = 12;
  const left = treeDepth * 15;
  const top = (cellHeight - 12) / 2;
  return (
    <div>
      <div className={className} />
      {isDeleteSubRowEnabled && (
        <div style={{ left, top, width, height }} className="rdg-child-row-btn" onClick={onDeleteSubRow}>
          <div className="glyphicon glyphicon-remove-sign" />
        </div>
      )}
    </div>
  );
}
