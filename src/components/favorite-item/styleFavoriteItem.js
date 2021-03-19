import { makeStyles } from "@material-ui/core/styles";

export const useFavoriteItemStyles = makeStyles({
  favoriteItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    border: "1px solid #FAFAFA",

    '&:hover': {
      background: "#F1F1F1",
    },
  },
  favoriteLink: {
    flex: "1 1 70%",

    padding: "16px 20px",
  },
  favoriteItemText: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
  },

  favoriteBoxBtn: {
    display: "none",
    flex: "1 1 30%",
    paddingRight: "20px",

    justifyContent: "flex-end"
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
