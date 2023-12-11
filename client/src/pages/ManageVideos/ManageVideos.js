import React from "react";
import { ServicesVideos } from "../../components";
import VideosDB from "./VideosDB";

const ManageVideos = () => {
  return (
    <>
      <ServicesVideos title="VIDEOS" data={VideosDB} />
    </>
  )
};

export default ManageVideos;
