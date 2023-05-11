import React, { FC } from "react";
import View from "../../../../../components/View";

const List: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "Events List",
  categoryId: "020201",
};

export default List;
