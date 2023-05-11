import React, { FC } from "react";
import View from "../../../../components/View";

const Talks: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "Insider Talks",
  categoryId: "0116",
};

export default Talks;
