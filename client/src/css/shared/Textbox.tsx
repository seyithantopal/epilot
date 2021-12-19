import React, { FC } from 'react';
import styled from 'styled-components';
import { COLOR_MODAL_LIST_TEXTBOX_BORDER } from '../../utils/constants/color';


const StyledTextbox = styled.input.attrs(
  {
    type: 'text',
    placeholder: 'List'
  })`
  border: 1px solid ${COLOR_MODAL_LIST_TEXTBOX_BORDER};
  width: 80%;
  height: 35px;
  border-radius: 10px;
  padding-left: 10px;
  font: 15px 'Ubuntu-Regular';
`

type Props = {
  list: string;
  setList: (value: React.SetStateAction<string>) => void;
};

const Textbox: FC<Props> = ({ list, setList }) => {
  return (
    <StyledTextbox value={list} onChange={(e) => setList(e.target.value)} />
  );
};

export default Textbox;
