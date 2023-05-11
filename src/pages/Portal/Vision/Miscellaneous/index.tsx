import React, { FC } from "react";
import View from "../../../../components/View";

const Miscellaneous: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "Miscellaneous",
  categoryId: "0120",
};

export default Miscellaneous;
