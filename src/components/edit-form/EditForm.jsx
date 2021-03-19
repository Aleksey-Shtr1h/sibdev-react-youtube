import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStateModalEditSelector,
  getDataItemFavoriteSelector,
  getSearchValuesSelector,
} from "../../redux/data/dataSelector";

import { ActionCreatorData } from "../../redux/data/dataAction";
import { OperationData } from "../../redux/data/dataReducer";

import { useEditFormStyles } from "./styleEditForm";

export const EditForm = () => {
  const dataItemFaforite = useSelector((state) =>
    getDataItemFavoriteSelector(state)
  );

  const [discription, setDiscription] = React.useState(
    dataItemFaforite.discription
  );

  const isModalEdit = useSelector((state) => getStateModalEditSelector(state));
  const searchValues = useSelector((state) => getSearchValuesSelector(state));

  const dispatch = useDispatch();
  const classes = useEditFormStyles();

  return (
    <div
      className={isModalEdit ? classes.formModalBox_hide : classes.formModalBox}
    >
      <form className={classes.formModal} action="">
        <div className={classes.formModalWrap}>
          <h2 className={classes.formModalTitle}>Сохранить запрос</h2>
          <ul className={classes.formModalList}>
            <li className={classes.formModalItem}>
              <label
                className={classes.formModalItem_labal}
                htmlFor="room-text"
              >
                Запрос
              </label>
              <input
                className={classes.formModalItem_input}
                type="text"
                id="room-text"
                placeholder=""
                value={dataItemFaforite.value}
                disabled={"disabled"}
              />
            </li>
            <li className={classes.formModalItem}>
              <label
                className={classes.formModalItem_labal}
                htmlFor="room-text"
              >
                Название
              </label>
              <input
                className={classes.formModalItem_input}
                type="text"
                id="room-text"
                placeholder=""
                value={discription}
                onChange={(evt) => setDiscription(evt.target.value)}
              />
            </li>
          </ul>

          <div className="container-flex-row container-channel-btn">
            <button
              className="form-main-btn-submit form-channel-btn"
              type="button"
              onClick={() => {
                setDiscription(dataItemFaforite.discription);
                dispatch(ActionCreatorData.toggleModalEdit(true));
              }}
            >
              Не сохранять
            </button>

            <button
              className="form-main-btn-submit form-channel-btn"
              type="button"
              onClick={() => {
                dispatch(
                  OperationData.changeSearchValue(
                    searchValues,
                    dataItemFaforite,
                    discription
                  )
                );
                dispatch(ActionCreatorData.toggleModalEdit(true));
              }}
            >
              Сохранить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
