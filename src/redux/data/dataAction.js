export const ActionTypeData = {
  GET_VIDEO_YOUTUBE: `DATA/GET_VIDEO_YOUTUBE`,
  CHANGE_SEARCH_VALUES: `DATA/CHANGE_SEARCH_VALUES`,
  CHANGE_INPUT_VALUE: `DATA/CHANGE_INPUT_VALUE`,
  IS_MODAL_EDIT: `DATA/IS_MODAL_EDIT`,
  DATA_FAFORITE_ITEM_MOVE: `DATA/DATA_FAFORITE_ITEM_MOVE`,
};

export const ActionCreatorData = {
  getVideoYouTube: (video) => ({
    type: ActionTypeData.GET_VIDEO_YOUTUBE,
    payload: video,
  }),
  changeSearchValues: (values) => ({
    type: ActionTypeData.CHANGE_SEARCH_VALUES,
    payload: values,
  }),
  changeInputValue: (inputValue) => ({
    type: ActionTypeData.CHANGE_INPUT_VALUE,
    payload: inputValue,
  }),
  toggleModalEdit: (bl) => ({
    type: ActionTypeData.IS_MODAL_EDIT,
    payload: bl,
  }),
  getDataItemFavorite: (value) => ({
    type: ActionTypeData.DATA_FAFORITE_ITEM_MOVE,
    payload: value,
  }),
};