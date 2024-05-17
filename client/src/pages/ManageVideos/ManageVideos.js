import React from "react";
import { ManageVideosTemplate } from "../../components";
import VideosDB from "./VideosDB";

const ManageVideos = () => {
  return (
    <>
      <ManageVideosTemplate title="VIDEOS" data={VideosDB} />
    </>
  )
};

export default ManageVideos;
