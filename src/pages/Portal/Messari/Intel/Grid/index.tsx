import React, { FC } from "react";
import View from "../../../../../components/View";

const Grid: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "Events Grid",
  categoryId: "020202",
};

export default Grid;
