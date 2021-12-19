import React, { FC, useState, useEffect, useRef, SyntheticEvent } from 'react';

// Styles
import { Wrapper, SubmitButton, CloseButton, XButton, ModalTitle } from './styles';
import Input from '../../css/shared/Input';

type Props = {
  onClose: () => void;
  onSave: (title: string) => void;
};

const Modal: FC<Props> = ({ onClose, onSave }) => {
  const modalElement = useRef<HTMLDivElement>(null);
  const [list, setList] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (e.target === modalElement.current) {
        onClose();
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (list === '') setErrors({ list: 'Please enter the name of the list' });
    else {
      onSave(list);
      onClose();
    }
  };

  return (
    <Wrapper ref={modalElement}>
      <div className='modal__content'>
        <div className='modal__header'>
          <ModalTitle>Add a List</ModalTitle>
          <XButton onClick={onClose}>&times;</XButton>
        </div>
        <div className='modal__body'>
          <form id='form' onSubmit={handleSubmit}>
            <Input list={list} setList={setList} errors={errors} errorField='list' />
          </form>
        </div>
        <div className='modal__footer'>
          <CloseButton onClick={onClose}>Close</CloseButton>
          <SubmitButton>Add</SubmitButton>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;