import React, { FC } from "react";
import View from "../../../../components/View";

const Short: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "Short Courses",
  categoryId: "0110",
};

export default Short;
