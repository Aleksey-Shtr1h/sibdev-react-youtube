import { makeStyles } from "@material-ui/core/styles";

export const useFavoritePageStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",

    padding: "0px 220px",

    height: "100%",

    background: "#FAFAFA",
  },

  favoriteTitle: {
    margin: "40px 0px",

    fontWeight: "400",
    fontSize: "28px",
    lineHeight: "40px",
  },
  favoriteList: {
    background: "#ffffff",
  },
  favoriteItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "16px 20px",
    border: "1px solid #FAFAFA",

    '&:hover': {
      background: "#F1F1F1",
    },
  },
  favoriteItemText: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
  },

  favoriteBoxBtn: {
    display: "none",
  },

  favoriteItemBtn: {
    paddingLeft: "20px",

    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "18px",

    background: "none",

    border: "none",

    cursor: "pointer",

    '&:hover': {
      color: "#FF0000",
    },
  },
  favoriteItemBtnChange: {
    color: "#1390E5",
  },
  favoriteItemBtnDel: {
    color: "#1390E5",
  },
});
