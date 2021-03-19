import { makeStyles } from "@material-ui/core/styles";

export const useVideoBoxStyles = makeStyles({
  boxMenuVideoYoutuboInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxVideoYoutuboInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  videoYoutuboInfoTitle: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",

    paddingRight: "15px",
  },
  videoYoutuboInfoText: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",

    color: "rgba(23, 23, 25, 0.3)",
  },
  videoYoutubeList_1: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

    width: "100%"
  },
  videoYoutubeList_2: {
    display: "flex",
    flexDirection: "column",
  },
});