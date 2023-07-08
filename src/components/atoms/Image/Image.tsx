import React from "react";

interface Props {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  className?: string;
}

function Image({ src, alt, className, width, height }: Props) {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

export default Image;
