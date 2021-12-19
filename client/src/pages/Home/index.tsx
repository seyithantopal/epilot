import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import { Wrapper } from './styles';

// Components
import Lists from '../../components/Lists';
import { ListType } from '../../types/interfaces';

const Home: FC = () => {
  const [lists, setLists] = useState<ListType[]>([]);

  useEffect(() => {
    const fetchToDoList = async () => {
      const { data: { data: listsArr } } = await axios.get('http://localhost:5000/cards');
      setLists(listsArr);
    };
    fetchToDoList();
  }, []);

  /**
   * Delete a list by id without mutating the state directly
   * @param {number} id
   * @returns {void}
   */
  const handleDelete = (id: number): void => {
    const newList = lists.filter(list => list.id !== id);
    setLists(newList);
  };

  /**
   * Add a list without mutation the state directly. Before adding a list, check the id
   * of the last item because we had implemented delete functionality based on the id of the item
   * @param {string} title
   * @returns {Promise<void>}
   */
  const handleAdd = async (title: string): Promise<void> => {
		const { data: { data: { id, name, closed } } } = await axios.post('http://localhost:5000/cards/create', { name: title });
    const newList: ListType = {
      id,
      name,
      closed
    };
    setLists([ ...lists, newList ]);
  };
  return (
    <Wrapper>
      <Lists lists={lists} onAdd={handleAdd} onDelete={handleDelete} />
    </Wrapper>
  );
};

export default Home;
