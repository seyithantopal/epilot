import styled from 'styled-components';
import {
  COLOR_HR,
  COLOR_LISTS_GRADIENT_END,
  COLOR_LISTS_GRADIENT_START,
  COLOR_LIST_TITLE,
  COLOR_PLUS_SIGN_BACKGROUND,
  COLOR_PLUS_SIGN_TEXT,
  COLOR_SCROLLBAR_THUMB,
  COLOR_SCROLLBAR_THUMB_HOVER,
  COLOR_SCROLLBAR_TRACK
} from '../../utils/constants/color';

export const Wrapper = styled.div`
  background: ${COLOR_LISTS_GRADIENT_START};
  background: -webkit-linear-gradient(to right, ${COLOR_LISTS_GRADIENT_START}, ${COLOR_LISTS_GRADIENT_END});
  background: linear-gradient(to right, ${COLOR_LISTS_GRADIENT_START}, ${COLOR_LISTS_GRADIENT_END});
  width: 400px;
  height: 500px;
  -webkit-border-radius: 40px;
  -moz-osx-border-radius: 40px;
  position: relative;
  overflow: hidden;

  .listsWrapper {
    height: 330px;
    overflow-x: hidden;
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: ${COLOR_SCROLLBAR_TRACK}; 
    }

    &::-webkit-scrollbar-thumb {
      background: ${COLOR_SCROLLBAR_THUMB};
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: ${COLOR_SCROLLBAR_THUMB_HOVER}; 
    }
  };
`

export const Title = styled.h1`
  color: ${COLOR_LIST_TITLE};
`

export const Divider = styled.hr`
  border: 1px solid ${COLOR_HR};
  width: 80%;
  margin-left: 0;
  margin-top: 0;
`

export const ListsDiv = styled.div`
  padding: 0 25px 0 25px;
`

export const PlusSign = styled.div`
  background-color: ${COLOR_PLUS_SIGN_BACKGROUND};
  width: 65px;
  height: 65px;
  position: absolute;
  -webkit-border-radius: 50%;
  bottom: 25px;
  right: 25px;
  font-size: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:after {
    content: '+';
    color: ${COLOR_PLUS_SIGN_TEXT};
  };
`