import React, { useRef } from "react";

interface Props {
  src: string;
  width: string;
  height: string;
}

function Video({ src = "", width = "320px", height = "300px" }: Props) {
  const videoSrc = src || "";
  return (
    <video width={width} height={height} autoPlay muted controls>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
}

export default Video;
