import React, { FC } from "react";
import View from "../../../../components/View";

const News: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "News",
  categoryId: "0203",
};

export default News;
