import { makeStyles } from "@material-ui/core/styles";

export const useAuthStyles = makeStyles({
  authSection: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",

    background: "#FAFAFA",
  },
  authContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: "100%",
  },
  authForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: "510px",
    height: "520px",

    background: "#ffffff",
  },
  authForm__title: {
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "28px",
  },
  authFormList: {
    paddingBottom: "40px",
  },
  authFormList__item: {
    position: "relative",
    display: "flex",
    flexDirection: "column",

    paddingBottom: "20px"
  },
  authFormList__text: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "22px",
    color: "rgba(23, 23, 25, 0.3);"
  },
  authFormList__input: {
    padding: "12px 15px",

    width: "334px",
    height: "48px",

    borderRadius: "5px",
    border: "1px solid rgba(39, 39, 39, 0.1)",
    outline: "none",

    '&:hover': {
      border: "1px solid #1390E5",
      background: "rgba(197, 228, 249, 0.3)"
    },
  },
  authFormBtn: {
    width: "176px",
    height: "52px",

    borderRadius: "5px",

    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#ffffff",

    border: "none",

    background: "#1390E5"
  }

});