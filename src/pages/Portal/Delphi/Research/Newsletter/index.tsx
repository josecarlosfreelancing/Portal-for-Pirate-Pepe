import React, { FC } from "react";
import View from "../../../../../components/View";

const Newsletter: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "Daily Newsletter",
  categoryId: "040101",
};

export default Newsletter;
