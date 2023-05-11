import React, { FC } from "react";
import View from "../../../../../components/View";

const NFTs: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "NFTs",
  categoryId: "030201",
};

export default NFTs;
