import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Auth } from "../../components/auth/Auth";
import { SearchPage } from "../../components/search-page/SearchPage";
import { FavoritePage } from "./../../components/favorite-page/FavoritePage";

import { AppRoute } from "../../constant";
import { ActionCreatorUser } from "../../redux/user/userAction";

import "./style.scss";

export const App = () => {
  const isAuthUser = useSelector((state) => state.USER.isAuthUser);
  const dispatch = useDispatch();

  const initGetAuthUser = React.useCallback(() => {
    const data = localStorage.getItem("login");
    if (data) {
      dispatch(ActionCreatorUser.getStateAuthUser(true));
    }
  }, [dispatch]);

  React.useEffect(() => {
    initGetAuthUser();
  }, [initGetAuthUser]);

  return (
    <Router>
      <Switch>
        {isAuthUser ? (
          <>
            <Redirect exact to={AppRoute.SEARCH} />
            <Route exact path={AppRoute.SEARCH}>
              <SearchPage />
            </Route>
            <Route exact path={AppRoute.FAVORITE}>
              <FavoritePage />
            </Route>
          </>
        ) : (
          <>
            <Redirect exact to={AppRoute.LOGIN} />
            <Route exact path={AppRoute.LOGIN}>
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};
