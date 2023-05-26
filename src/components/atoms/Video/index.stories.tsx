import React from "react";
import Video from "./Video";
import sampleVidio from "../../../video/sample.mp4";

export default {
  title: "atoms/Video",
};

export const Default: React.FC = () => (
  <Video src={sampleVidio} width="300px" height="200px" />
);
