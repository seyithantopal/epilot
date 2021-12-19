import React, { FC } from 'react';
import { DeleteIconType } from '../../types/interfaces';
import { COLOR_DELETE_ICON } from '../../utils/constants/color';


const Delete: FC<DeleteIconType> = ({ onClick }) => {
  return (
    <svg onClick={onClick} width={30} height={24} fill='none' style={{ cursor: 'pointer' }}>
      <path
        d='M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14Z'
        stroke={COLOR_DELETE_ICON}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Delete;
