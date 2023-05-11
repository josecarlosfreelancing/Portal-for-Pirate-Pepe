import React, { FC } from "react";
import View from "../../../../components/View";

const Community: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "Community Q&A",
  categoryId: "0105",
};

export default Community;
