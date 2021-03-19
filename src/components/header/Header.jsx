import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { OperationUser } from "../../redux/user/userReducer";
import { ActionCreatorData } from "../../redux/data/dataAction";

import { AppRoute } from "./../../constant";

import { useHeaderStyles } from "./styleHeader";
import logo from "../../assets/img/logo.svg";

export const Header = ({ children }) => {
  const dispatch = useDispatch();
  const classes = useHeaderStyles();
  return (
    <div className={classes.pageContainer}>
      <header className={classes.header}>
        <div className={classes.menu}>
          <img
            className={classes.headerLogo}
            src={logo}
            alt=""
            width="48"
            height="48"
          />
          <ul className={classes.headerList}>
            <li className={classes.headerItem}>
              <Link
                className={`${classes.headerLink} header-link-before`}
                to={AppRoute.SEARCH}
              >
                Поиск
              </Link>
            </li>
            <li className={classes.headerItem}>
              <Link
                className={`${classes.headerLink} header-link-before`}
                to={AppRoute.FAVORITE}
                onClick={() => {
                  dispatch(ActionCreatorData.getVideoYouTube(null));
                  dispatch(ActionCreatorData.changeInputValue(""));
                }}
              >
                Избранное
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.headerExitBox}>
          <Link
            className={`${classes.headerLink} header-link-before`}
            onClick={() => {
              dispatch(OperationUser.userExit());
              dispatch(ActionCreatorData.getVideoYouTube(null));
            }}
            to={AppRoute.LOGIN}
          >
            Выйти
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
};
