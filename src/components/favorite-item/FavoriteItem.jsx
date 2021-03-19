import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ActionCreatorData } from "../../redux/data/dataAction";
import { OperationData } from "../../redux/data/dataReducer";

import { getSearchValuesSelector } from "../../redux/data/dataSelector";

import { useFavoriteItemStyles } from "./styleFavoriteItem";
import { AppRoute } from "./../../constant";

export const FavoriteItem = ({ searchValue }) => {
  const searchValues = useSelector((state) => getSearchValuesSelector(state));
  const dispatch = useDispatch();

  const { value, id, discription } = searchValue;

  const classes = useFavoriteItemStyles();

  return (
    <li
      className={`favorite-item ${classes.favoriteItem}`}
      onMouseEnter={() =>
        dispatch(ActionCreatorData.getDataItemFavorite(searchValue))
      }
    >
      <Link
        className={classes.favoriteLink}
        onClick={() => {
          dispatch(ActionCreatorData.changeInputValue(value));
          dispatch(OperationData.getVideoYouTube(value));
        }}
        to={AppRoute.SEARCH}
      >
        <p className={classes.favoriteItemText}>{discription}</p>
      </Link>
      <div className={`${classes.favoriteBoxBtn} favorite-box-btn `}>
        <button
          className={`${classes.favoriteItemBtn} ${classes.favoriteItemBtnChange}`}
          type="button"
          onClick={() => dispatch(ActionCreatorData.toggleModalEdit(false))}
        >
          Изменить
        </button>
        <button
          className={`${classes.favoriteItemBtn} ${classes.favoriteItemBtnDel}`}
          type="button"
          onClick={() => {
            dispatch(OperationData.deleteSearchValue(searchValues, id));
          }}
        >
          Удалить
        </button>
      </div>
    </li>
  );
};
