import React from "react";
import { useSelector } from "react-redux";
import { getSearchValuesSelector } from "../../redux/data/dataSelector";

import { Header } from "../header/Header";
import { FavoriteItem } from "./../favorite-item/FavoriteItem";

import { useFavoritePageStyles } from "./styleFavoritePage";

export const FavoritePage = () => {
  const searchValues = useSelector((state) => getSearchValuesSelector(state));
  const classes = useFavoritePageStyles();

  return (
    <Header>
      <main className={classes.mainContainer}>
        <h2 className={classes.favoriteTitle}>Избранное</h2>
        <ul className={classes.favoriteList}>
          {searchValues.length > 0 &&
            searchValues.map((searchValue, idx) => {
              return (
                <FavoriteItem
                  searchValue={searchValue}
                  key={searchValue.id + idx}
                />
              );
            })}
        </ul>
      </main>
    </Header>
  );
};
