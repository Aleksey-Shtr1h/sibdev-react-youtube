import { makeStyles } from "@material-ui/core/styles";

export const useSearchVideoStyles = makeStyles({
  sectionSearch: {
    marginBottom: "40px",
  },
  formSearchEmpty: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formSearchVideo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  formSearchLabel: {
    paddingBottom: "40px",

    fontWeight: "400",
    fontSize: "36px",
    lineHeight: "52px",
    color: "#000000",
  },

  formSearchLabelVideo: {
    paddingBottom: "12px",

    fontWeight: "400",
    fontSize: "28px",
    lineHeight: "40px",
    color: "#000000",
  },

  formSearchDataBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    width: "686px",
  },
  formSearchDataBoxVideo: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    width: "100%",
  },
  formSearchInput: {
    flex: "0 1 80%",
  },
  formSearchBtn: {
    flex: "0 1 20%",

    width: "150px",
    height: "52px",

    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#ffffff",

    border: "none",

    background: "#1390E5"
  },
  favoritehBtn: {
    position: "absolute",
    top: "35%",
    right: "22%",

    background: "none",

    border: "none",

    '&:hover': {
      color: "#FF0000",
    },
  }
});