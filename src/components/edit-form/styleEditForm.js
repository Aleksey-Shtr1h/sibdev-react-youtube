import { makeStyles } from "@material-ui/core/styles";

export const useEditFormStyles = makeStyles({
  formModalBox_hide: {
    display: "none",
  },
  formModalBox: {
    display: "block",
    position: "absolute",

    width: "100vw",
    height: "100vh",

    background: "#dadadac4",
    zIndex: "10"
  },
  formModal: {
    position: "fixed",
    left: "50%",
    top: "50%",

    marginLeft: "-10%",
    marginTop: "-10%",

    width: "300px",
    height: "300px",
    background: "#ffffff",

    border: "1px solid black"
  },
  formModalWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  formModalTitle: {
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "28px",
  },
  formModalItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  formModalItem_labal: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "22px",
  },
});
