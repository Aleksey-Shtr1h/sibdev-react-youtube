import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OperationData } from "../../redux/data/dataReducer";
import { getSearchValuesSelector } from "../../redux/data/dataSelector";
import { useSearchVideoStyles } from "./styleSearchVedio";

export const SearchVideo = ({
  isVideo,
  onClickSubmit,
  onClickChangeValue,
  inputValue,
}) => {
  const searchValues = useSelector((state) => getSearchValuesSelector(state));
  const classes = useSearchVideoStyles();
  const dispatch = useDispatch();

  return (
    <section className={isVideo ? classes.sectionSearch : ""}>
      <h2 className="visually-hidden">Search Video</h2>
      <form
        className={isVideo ? classes.formSearchVideo : classes.formSearchEmpty}
      >
        <label
          className={
            isVideo ? classes.formSearchLabelVideo : classes.formSearchLabel
          }
          htmlFor="video-search"
        >
          Поиск видео
        </label>
        <div
          className={
            isVideo ? classes.formSearchDataBoxVideo : classes.formSearchDataBox
          }
        >
          <input
            className={classes.formSearchInput}
            onChange={(evt) => onClickChangeValue(evt.target.value)}
            name="video-search"
            id="video-search"
            type="text"
            value={inputValue}
            placeholder="Что хотите посмотреть?"
          />
          <button
            className={classes.formSearchBtn}
            type="button"
            onClick={() => onClickSubmit()}
          >
            Найти
          </button>
          {isVideo && (
            <button
              className={classes.favoritehBtn}
              type="button"
              onClick={() =>
                dispatch(OperationData.addSearchValue(searchValues, inputValue))
              }
            >
              Добавить
            </button>
          )}
        </div>
      </form>
    </section>
  );
};
