import React, { FC } from "react";
import View from "../../../../components/View";

const Library: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "Library",
  categoryId: "0403",
};

export default Library;
