import styled from 'styled-components';
import {
  COLOR_MODAL_BACKGROUND,
  COLOR_MODAL_CLOSE_BUTTON_BACKGROUND,
  COLOR_MODAL_CLOSE_BUTTON_TEXT,
  COLOR_MODAL_HR,
  COLOR_MODAL_LIST_TEXTBOX_BORDER,
  COLOR_MODAL_OVERLAY,
  COLOR_MODAL_SUBMIT_BUTTON_BACKGROUND,
  COLOR_MODAL_SUBMIT_BUTTON_TEXT,
  COLOR_MODAL_TITLE,
  COLOR_MODAL_X_BUTTON
} from '../../utils/constants/color';

export const Wrapper = styled.div`
  visibility: visible;
  opacity: 1;
  width: 100%;
  height: 100vh;
  background-color: ${COLOR_MODAL_OVERLAY};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: visibility 0s, opacity 0.5s;

  .modal__content {
    background-color: ${COLOR_MODAL_BACKGROUND};
    width: 40%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;

    .modal__header {
      height: 20%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid ${COLOR_MODAL_HR};
      padding: 0 1rem;
    };

    .modal__body {
      height: 60%;
      overflow: hidden;
      overflow-wrap: break-word;
      word-wrap: break-word;

      form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        position: relative;
      }
    }

    .modal__footer {
      height: 20%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding-right: 1rem;
      border-top: 1px solid ${COLOR_MODAL_HR};

      button {
        &:not(:last-child) {
          margin-right: 0.5rem;
        }
      }
    }
  };
`

export const Button = styled.button`
  padding: 10px 30px 10px 30px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
`

export const SubmitButton = styled(Button).attrs(
  {
    type: 'submit',
    form: 'form'
  })`
  background-color: ${COLOR_MODAL_SUBMIT_BUTTON_BACKGROUND};
  color: ${COLOR_MODAL_SUBMIT_BUTTON_TEXT};
`

export const CloseButton = styled(Button).attrs(
  {
    type: 'button',
  })`
  background-color: ${COLOR_MODAL_CLOSE_BUTTON_BACKGROUND};
  color: ${COLOR_MODAL_CLOSE_BUTTON_TEXT};
`

export const Input = styled.input.attrs(
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

export const XButton = styled.div`
  margin: 0 1rem 0.2rem;
  cursor: pointer;
  color: ${COLOR_MODAL_X_BUTTON};
  font-size: 30px;
  &:hover {
    color: ${COLOR_MODAL_X_BUTTON};
  }
`

export const ModalTitle = styled.div`
  color: ${COLOR_MODAL_TITLE};
  font-size: 30px;
  font: 21px 'Montserrat', sans-serif;
`