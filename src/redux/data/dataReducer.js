import { nanoid } from 'nanoid';
import { ActionCreatorData, ActionTypeData } from './dataAction.js';

export const initialState = {
  inputValue: '',
  videoYouTube: null,
  searchValues: [],
  isModalEdit: true,
  dataItemFaforite: null,
};

export const OperationData = {
  getVideoYouTube: (inputValue, countVideo) => async (dispatch, getState, api) => {
    const response = await api.get("/search", {
      params: {
        q: inputValue,
        maxResults: countVideo,
      },
    });
    dispatch(ActionCreatorData.getVideoYouTube(response.data.items))
  },
  addSearchValue: (searchValues, inputValue, countVideo) => (dispatch) => {
    if (inputValue !== "") {
      const newSearchValues = searchValues.slice();
      const newValue = {
        id: nanoid(),
        value: inputValue,
        discription: inputValue,
        countVideo,
      };
      newSearchValues.push(newValue);
      dispatch(ActionCreatorData.changeSearchValues(newSearchValues));
    }
  },
  changeSearchValue: (searchValues, dataItemFaforite, discription) => (dispatch) => {

    const newSearchValues = searchValues.slice();
    const idx = newSearchValues.findIndex((newSearchValue) => newSearchValue.id === dataItemFaforite.id);
    newSearchValues[idx] = {
      ...dataItemFaforite, discription: discription,
    };
    dispatch(ActionCreatorData.changeSearchValues(newSearchValues));
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
    case ActionTypeData.IS_MODAL_EDIT:
      return {
        ...state,
        isModalEdit: action.payload,
      };
    case ActionTypeData.DATA_FAFORITE_ITEM_MOVE:
      return {
        ...state,
        dataItemFaforite: action.payload,
      };
    default:
      break;
  }

  return state;
};