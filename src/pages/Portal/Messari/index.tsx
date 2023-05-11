import React, { FC } from "react";
import { CategoryProps } from "../../../types/portal";
import Category from "../../../components/Category";

const Messari: FC = () => {
  return <Category {...messaries} />;
};

const messaries: CategoryProps = {
  content: "Text Section",
  fields: [
    { title: "Research", href: "/messari/research" },
    { title: "Intel", href: "/messari/intel" },
    // { title: "News", href: "/messari/news" },
  ],
};

export default Messari;
