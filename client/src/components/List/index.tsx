import axios from 'axios';
import React, { FC, useState, useEffect } from 'react';
import { ListType } from '../../types/interfaces';
import { DONE_LIST_ID, TODO_LIST_ID } from '../../utils/constants/common';

import { Wrapper, SingleList, Label, DeleteIcon } from './styles';

type Props = {
  list: ListType;
  onDelete: (id: string) => void;
};

const List: FC<Props> = ({ list, onDelete }) => {
  const { id, name, idList } = list;
  const [isChecked, setIsChecked] = useState<boolean>(idList === DONE_LIST_ID);

  useEffect(() => {
    setIsChecked(idList === DONE_LIST_ID);
  }, [onDelete, idList]);

  const handleCheck = async () => {
    try {
      const { data } = await axios.put(`http://localhost:5000/cards/${id}`, { 
        list_id: !isChecked ? 'DONE_LIST_ID' : 'TODO_LIST_ID',
      });
    } catch (err) {
      console.log(`Something went wrong during updating a card: ${err}`);
    }
  };

  return (
    <Wrapper>
      <SingleList isChecked={isChecked} onChange={handleCheck}>
        <Label>
          <div className='leftWrapper'>
            <input checked={isChecked} type='checkbox' className='check' onChange={() => setIsChecked(!isChecked)} />
          </div>
          <div className='rightWrapper'>{name}</div>
        </Label>
        {isChecked && <DeleteIcon onClick={() => onDelete(id)} />}
      </SingleList>
    </Wrapper>
  );
};

export default List;
