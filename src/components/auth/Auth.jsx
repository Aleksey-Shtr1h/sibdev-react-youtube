import React from "react";

import { useDispatch } from "react-redux";
import { OperationUser } from "../../redux/user/userReducer";

import { useAuthStyles } from "./styleAuth";

export const Auth = () => {
  const [login, setLogin] = React.useState(``);
  const [password, setPassword] = React.useState(``);
  const [visiblePassword, setVisiblePassword] = React.useState(true);
  const dispatch = useDispatch();

  const classes = useAuthStyles();

  return (
    <section className={classes.authSection}>
      <div className={classes.authContainer}>
        <form className={classes.authForm} action="#">
          <h2 className={classes.authForm__title}>Вход</h2>
          <ul className={classes.authFormList}>
            <li className={classes.authFormList__item}>
              <label className={classes.authFormList__text} htmlFor="login">
                Логин
              </label>
              <input
                className={`${classes.authFormList__input} auth-input-focus`}
                type="text"
                id="login"
                placeholder="Введите логин"
                value={login}
                onChange={(evt) => setLogin(evt.target.value)}
              />
            </li>

            <li className={classes.authFormList__item}>
              <label className={classes.authFormList__text} htmlFor="password">
                Пароль
              </label>
              <input
                className={`${classes.authFormList__input} auth-input-focus`}
                type={visiblePassword ? "password" : "text"}
                id="password"
                placeholder="*********"
                autoComplete="on"
                value={password}
                onChange={(evt) => {
                  setPassword(evt.target.value);
                }}
              />
              <div className="visibleEyeBox">
                <input
                  className="visually-hidden visibleEyeBox-checkbox"
                  type="checkbox"
                  id="eye"
                />
                <label
                  className="visibleEyeBox-label"
                  htmlFor="eye"
                  onClick={() => setVisiblePassword(!visiblePassword)}
                ></label>
              </div>
            </li>
          </ul>

          <button
            className={classes.authFormBtn}
            type="button"
            onClick={() =>
              dispatch(
                OperationUser.userAuth({
                  login,
                  password,
                })
              )
            }
          >
            Войти
          </button>
        </form>
      </div>
    </section>
  );
};
