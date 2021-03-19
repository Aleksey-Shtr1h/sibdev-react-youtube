import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../header/Header";
import { SearchVideo } from "../search/SearchVideo";
import { VideoYoutubeBox } from "../videoYoutubeBox/VideoYoutubeBox";

import {
  getVideoYouTubeSelector,
  getInputValueSelector,
} from "../../redux/data/dataSelector";
import { OperationData } from "../../redux/data/dataReducer";
import { ActionCreatorData } from "../../redux/data/dataAction";

import { useSearchPageStyles } from "./styleSearchPage";

export const SearchPage = () => {
  // const [inputValue, setInputValue] = React.useState("");
  const inputValue = useSelector((state) => getInputValueSelector(state));
  const videoYouTube = useSelector((state) => getVideoYouTubeSelector(state));
  const dispatch = useDispatch();

  const isVideo = videoYouTube === null ? false : true;
  const classes = useSearchPageStyles();

  const onClickSubmit = () => {
    dispatch(OperationData.getVideoYouTube(inputValue));
  };

  const onClickChangeValue = (value) => {
    dispatch(ActionCreatorData.changeInputValue(value));
  };

  return (
    <Header>
      <main
        className={isVideo ? classes.mainContainerVideo : classes.mainContainer}
      >
        <SearchVideo
          isVideo={isVideo}
          onClickSubmit={onClickSubmit}
          onClickChangeValue={onClickChangeValue}
          inputValue={inputValue}
        />
        {videoYouTube && (
          <VideoYoutubeBox
            inputValue={inputValue}
            videoYouTube={videoYouTube}
          />
        )}
      </main>
    </Header>
  );
};
