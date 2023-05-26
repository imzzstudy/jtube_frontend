import React from "react";

interface Props {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
}

function Image({ src, alt, width, height }: Props) {
  return <img src={src} alt={alt} width={width} height={height} />;
}

export default Image;
