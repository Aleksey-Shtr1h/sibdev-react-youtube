import { makeStyles } from "@material-ui/core/styles";

export const useHeaderStyles = makeStyles({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "0px 220px"
  },
  menu: {
    display: "flex",
    flexDirection: "row",

    height: "100%",
  },
  headerLogo: {
    height: "48px",
    width: "48px",

    marginRight: "55px",
  },
  headerList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    height: "100%"
  },
  headerItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    position: "relative",
    marginRight: "40px",
    height: "100%",
  },
  headerLink: {
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "28px",
    color: "#1390E5",

    background: "none",
    border: "none"
  },
  headerExitBox: {
    position: "relative",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    height: "100%",
  },
});