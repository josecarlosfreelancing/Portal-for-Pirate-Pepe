import React, { FC } from "react";
import View from "../../../../components/View";

const Tutorials: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "Investors Tutorials",
  categoryId: "0103",
};

export default Tutorials;
