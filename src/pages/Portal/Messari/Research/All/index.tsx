import React, { FC } from "react";
import View from "../../../../../components/View";

const All: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "All Research",
  categoryId: "020101",
};

export default All;
