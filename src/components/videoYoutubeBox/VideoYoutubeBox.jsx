import React from "react";

import { VideoItem } from "../video-item/VideoItem";

import { useVideoBoxStyles } from "./styleVideoYoutubeBox";

export const VideoYoutubeBox = ({ inputValue, videoYouTube }) => {
  const [sectionToglle, setSectionToglle] = React.useState(true);
  const classes = useVideoBoxStyles();

  const onClickSectionToglle = (toglle) => {
    if (sectionToglle !== toglle) {
      setSectionToglle(toglle);
    }
  };

  return (
    <section className={classes.sectionVideoYoutube}>
      <div className={classes.boxMenuVideoYoutuboInfo}>
        <div className={classes.boxVideoYoutuboInfo}>
          <h2
            className={classes.videoYoutuboInfoTitle}
          >{`Видео по запросу  «${inputValue}»`}</h2>
          <p className={classes.videoYoutuboInfoText}>{videoYouTube.length}</p>
        </div>
        <div className={classes.boxVideoYoutuboInfo}>
          <button onClick={() => onClickSectionToglle(true)}>список</button>
          <button onClick={() => onClickSectionToglle(false)}>сетка</button>
        </div>
      </div>

      <ul
        className={
          sectionToglle
            ? classes.videoYoutubeList_1
            : classes.videoYoutubeList_2
        }
      >
        {videoYouTube.map((video, idx) => {
          return (
            <VideoItem video={video} key={idx} sectionToglle={sectionToglle} />
          );
        })}
      </ul>
    </section>
  );
};
