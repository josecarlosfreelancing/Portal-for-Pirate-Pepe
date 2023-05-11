import React, { FC } from "react";
import View from "../../../../components/View";

const Knitting: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "The Knitting Show",
  categoryId: "0102",
};

export default Knitting;
