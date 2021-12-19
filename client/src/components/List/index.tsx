import React, { FC, useState, useEffect } from 'react';
import { ListType } from '../../types/interfaces';

import { Wrapper, SingleList, Label, DeleteIcon } from './styles';

type Props = {
  list: ListType;
  onDelete: (id: number) => void;
};

const List: FC<Props> = ({ list, onDelete }) => {
  const { id, name, closed } = list;
  const [isChecked, setIsChecked] = useState<boolean>(closed);

  useEffect(() => {
    setIsChecked(closed);
  }, [onDelete, closed]);

  return (
    <Wrapper>
      <SingleList isChecked={isChecked}>
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
