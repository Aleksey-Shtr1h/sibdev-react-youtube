import { nanoid } from 'nanoid';
import { ActionCreatorData, ActionTypeData } from './dataAction.js';
// import { ActionCreatorApp } from '../app/appAction.js';

export const initialState = {
  inputValue: '',
  videoYouTube: null,
  searchValues: [],
};

export const OperationData = {
  getVideoYouTube: (inputValue) => async (dispatch, getState, api) => {
    const response = await api.get("/search", {
      params: {
        q: inputValue,
      },
    });
    dispatch(ActionCreatorData.getVideoYouTube(response.data.items))
  },
  addSearchValue: (searchValues, inputValue) => (dispatch) => {
    if (inputValue !== "") {
      const newSearchValues = searchValues.slice();
      const newValue = {
        id: nanoid(),
        value: inputValue,
      };
      newSearchValues.push(newValue);
      dispatch(ActionCreatorData.changeSearchValues(newSearchValues));
    }
  },
  deleteSearchValue: (searchValues, id) => (dispatch) => {
    const newSearchValues = searchValues.slice();
    const idx = newSearchValues.findIndex((newSearchValue) => newSearchValue.id === id);
    newSearchValues.splice(idx, 1);
    dispatch(ActionCreatorData.changeSearchValues(newSearchValues));
  }
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypeData.GET_VIDEO_YOUTUBE:
      return {
        ...state,
        videoYouTube: action.payload,
      };

    case ActionTypeData.CHANGE_SEARCH_VALUES:
      return {
        ...state,
        searchValues: action.payload,
      };

    case ActionTypeData.CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      break;
  }

  return state;
};