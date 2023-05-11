import React, { FC } from "react";
import View from "../../../../../components/View";

const Calendar: FC = () => {
  return <View {...category} />;
};

const category = {
  title: "Events Calendar",
  categoryId: "020203",
};

export default Calendar;
