import React, { FC } from "react";
import View from "../../../../components/View";

const Distillery: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "The Distillery",
  categoryId: "0104",
};

export default Distillery;
