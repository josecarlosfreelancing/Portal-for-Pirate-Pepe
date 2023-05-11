import React, { FC } from "react";
import View from "../../../../components/View";

const Macro: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "Macro Insiders",
  categoryId: "0112",
};

export default Macro;
