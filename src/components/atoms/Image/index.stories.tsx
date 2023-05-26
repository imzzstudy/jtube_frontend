import React from "react";
import Image from "./Image";
import testImg from "../../../images/test.jpg";

export default {
  title: "atoms/Image",
};

export const Default: React.FC = () => (
  <Image src={testImg} width="300px" height="300px"></Image>
);

export const Secondary: React.FC = () => <Image src={testImg}></Image>;
