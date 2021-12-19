import axios from 'axios';
import { Request, Response } from 'express';


export const getCards = async (req: Request, res: Response) => {
  try {
    const params = {
      key: process.env.API_KEY,
      token: process.env.TOKEN,
    };
    const { data } = await axios.get(`https://api.trello.com/1/boards/${process.env.BOARD_ID}/cards?`, { params });
    return res.status(200).json({ message: 'OK', data });
  } catch (err) {
    return `Something went wrong during fetching cards: ${err}`;
  }
};

export const updateCards = async (req: Request, res: Response) => {
  try {
    const { card_id } = req.params;
    const { list_id } = req.body;
    const params = {
      key: process.env.API_KEY,
      token: process.env.TOKEN,
    };
    const body = {
      idList: process?.env?.[list_id],
    };
    
    const { data } = await axios.put(`https://api.trello.com/1/cards/${card_id}/?`, body, { params });
    return res.status(200).json({ message: 'OK', data });
  } catch (err) {
    return `Something went wrong during updating cards: ${err}`;
  }
};

export const createACard = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const params = {
      key: process.env.API_KEY,
      token: process.env.TOKEN,
      idList: process.env.TODO_LIST_ID,
    };
    const { data } = await axios.post(`https://api.trello.com/1/cards?`, { name }, { params });
    return res.status(200).json({ message: 'OK', data });
  } catch (err) {
    return `Something went wrong during creating a card: ${err}`;
  }
};

export const deleteACard = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const params = {
      key: process.env.API_KEY,
      token: process.env.TOKEN,
    };
    const { data } = await axios.delete(`https://api.trello.com/1/cards/${id}?`, { params });
    return res.status(200).json({ message: 'OK', data });
  } catch (err) {
    return `Something went wrong during deleting a card: ${err}`;
  }
};
