import styled from 'styled-components';
import { COLOR_LIST, COLOR_LIST_CHECKED } from '../../utils/constants/color';
import { CheckboxType } from '../../types/interfaces';
import Delete from '../../assets/icons/Delete';

export const Wrapper = styled.div`
  // background-color: pink;
`
export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const SingleList = styled.div<CheckboxType>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 15px;

  .rightWrapper {
    width: 100%;
    font-family: ${(props) => props.isChecked ? 'Ubuntu-Italic' : 'Ubuntu-Regular'};
    font-size: 20px;
    color: ${(props) => props.isChecked ? COLOR_LIST_CHECKED : COLOR_LIST};
    margin-left: 8px;
    text-decoration: ${(props) => props.isChecked ? 'line-through' : ''};
    transition: all 500ms;
  };

  .check {
    width: 20px;
    height: 20px;
  };
`

export const DeleteIcon = styled(Delete)``
