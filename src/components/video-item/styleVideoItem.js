import { makeStyles } from "@material-ui/core/styles";

export const useVideoItemStyles = makeStyles({
  videoYoutubeItem_1: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 25%",
  },
  videoYoutubeItem_2: {
    display: "flex",
    flexDirection: "row",
  },
  videoYoutubeIframe: {
    width: "245px",
  },
  videoYoutubeTitle: {
    flex: "0 1 70%",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
  },
});