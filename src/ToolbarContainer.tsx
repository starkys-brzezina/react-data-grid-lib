import * as React from 'react';
import { isElement, isValidElementType } from 'react-is';
import { ToolbarProps } from './common/types';

export interface ToolbarContainerProps extends ToolbarProps {
  /** Component used to render toolbar above the grid */
  toolbar?: React.ReactElement<ToolbarProps> | React.ComponentType<ToolbarProps>;
}

export default function ToolbarContainer({ toolbar, columns, rowsCount, onToggleFilter }: ToolbarContainerProps) {
  if (!toolbar) {
    return null;
  }

  const toolBarProps = { columns, onToggleFilter, rowsCount };

  if (isElement(toolbar)) {
    return React.cloneElement(toolbar, toolBarProps);
  }

  if (isValidElementType(toolbar)) {
    return React.createElement(toolbar, toolBarProps);
  }

  return null;
}
