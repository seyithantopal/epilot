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
   * @returns {Promise<void>}
   */
  const handleDelete = async (id: number): Promise<void> => {
    const newList = lists.filter(list => list.id !== id);
    try {
      const { data: { message } } = await axios.post('http://localhost:5000/cards/delete', { id });
      if (message === 'OK') {
        setLists(newList);
      }
    } catch (err) {
      console.log(`Something went wrong during deleting a card: ${err}`);
    }
  };

  /**
   * Add a list without mutation the state directly. Before adding a list, check the id
   * of the last item because we had implemented delete functionality based on the id of the item
   * @param {string} title
   * @returns {Promise<void>}
   */
  const handleAdd = async (title: string): Promise<void> => {
    try {
      const { data: { data: { id, name, closed } } } = await axios.post('http://localhost:5000/cards/create', { name: title });
      const newList: ListType = {
        id,
        name,
        closed
      };
      setLists([ ...lists, newList ]);
    } catch (err) {
      console.log(`Something went wrong during creating a card: ${err}`);
    }
  };
  return (
    <Wrapper>
      <Lists lists={lists} onAdd={handleAdd} onDelete={handleDelete} />
    </Wrapper>
  );
};

export default Home;
