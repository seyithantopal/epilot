import React, { FC } from 'react';
import styled from 'styled-components';
import { COLOR_MODAL_FORM_VALIDATION_ERROR } from '../../utils/constants/color';
import Textbox from './Textbox';

type Props = {
  list: string;
  setList: (value: React.SetStateAction<string>) => void;
  errors: { [key: string]: string };
  errorField: string;
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .validationError {
    display: inline-block;
    position: absolute;
    left: 40px;
    bottom: 75px;
    color: ${COLOR_MODAL_FORM_VALIDATION_ERROR};
  }
`

const Input: FC<Props> = ({ list, setList, errors, errorField }) => {
  return (
    <InputWrapper>
      <Textbox list={list} setList={setList} />
      <small className="validationError">{errors[errorField] ? errors[errorField] : ''}</small>
    </InputWrapper>
  );
};

export default Input;
