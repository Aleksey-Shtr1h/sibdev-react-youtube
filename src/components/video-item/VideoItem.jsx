import React from "react";
import { useVideoItemStyles } from "./styleVideoItem";

export const VideoItem = ({ video, sectionToglle }) => {
  const { id, snippet } = video;
  const classes = useVideoItemStyles();

  const getTitleVideo = (title) => {
    if (title.length > 25) {
      return title.slice(0, 25) + "...";
    }
    return title;
  };

  return (
    <li
      className={
        sectionToglle ? classes.videoYoutubeItem_1 : classes.videoYoutubeItem_2
      }
    >
      <iframe
        className={classes.videoYoutubeIframe}
        src={`https://www.youtube.com/embed/${id.videoId}`}
        title="Video player"
      />
      <h3 className={classes.videoYoutubeTitle}>
        {getTitleVideo(snippet.title)}
      </h3>
    </li>
  );
};
