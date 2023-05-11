import React, { FC } from "react";
import View from "../../../../components/View";

const Live: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "Live Q&A",
  categoryId: "0106",
};

export default Live;
