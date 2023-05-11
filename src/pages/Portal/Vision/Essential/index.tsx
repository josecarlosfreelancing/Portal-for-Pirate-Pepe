import React, { FC } from "react";
import View from "../../../../components/View";

const Essential: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "The Essential Conversation",
  categoryId: "0107",
};

export default Essential;
