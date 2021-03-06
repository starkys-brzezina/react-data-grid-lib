import * as React from 'react';
import { mount } from 'enzyme';

import ChildRowDeleteButton, { ChildRowDeleteButtonProps } from '../ChildRowDeleteButton';

describe('ChildRowDeleteButton', () => {
  const getFakeProps = (isLastSibling?: boolean): ChildRowDeleteButtonProps => {
    const onDeleteSubRow = jest.fn();
    const siblingIndex = isLastSibling ? 1 : 0;
    return {
      treeDepth: 2,
      cellHeight: 50,
      siblingIndex,
      numberSiblings: 2,
      onDeleteSubRow,
      isDeleteSubRowEnabled: true
    };
  };

  const setup = (props: ChildRowDeleteButtonProps) => {
    return mount(<ChildRowDeleteButton {...props} />);
  };

  it('should create an instance of CellExpand', () => {
    const fakeProps = getFakeProps(false);
    const wrapper = setup(fakeProps);
    expect(wrapper.find(ChildRowDeleteButton).length).toBe(1);
    wrapper.unmount();
  });

  it('should render correctly when is isLastSibiling is false', () => {
    const fakeProps = getFakeProps(false);
    const wrapper = setup(fakeProps);
    expect(wrapper.find('div.rdg-child-row-action-cross').length).toBe(1);
    expect(wrapper.find('div.rdg-child-row-btn').length).toBe(1);
    wrapper.unmount();
  });

  it('should render correctly when is isLastSibiling is true', () => {
    const fakeProps = getFakeProps(true);
    const wrapper = setup(fakeProps);
    expect(wrapper.find('div.rdg-child-row-action-cross').length).toBe(1);
    expect(wrapper.find('div.rdg-child-row-btn').length).toBe(1);
    wrapper.unmount();
  });

  it('should call onDeleteSubRow when clicked', () => {
    const fakeProps = getFakeProps(true);
    const wrapper = setup(fakeProps);
    const button = wrapper.find('div.rdg-child-row-btn');
    button.simulate('click');
    expect(fakeProps.onDeleteSubRow).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
});
