import React, { FC } from "react";
import { CategoryProps } from "../../../../types/portal";
import Category from "../../../../components/Category";

const Intel: FC = () => {
  return <Category {...intels} />;
};

const intels: CategoryProps = {
  content: "Intel",
  fields: [
    { title: "Events List", href: "/messari/intel/list" },
    { title: "Events Grid", href: "/messari/intel/grid" },
    { title: "Events Calendar", href: "/messari/intel/calendar" },
  ],
};

export default Intel;
