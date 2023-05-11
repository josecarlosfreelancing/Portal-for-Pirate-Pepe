import React, { FC } from "react";
import { CategoryProps } from "../../../../types/portal";
import Category from "../../../../components/Category";

const Research: FC = () => {
  return <Category {...researches} />;
};

const researches: CategoryProps = {
  content: "Research",
  fields: [
    // { title: "All Research", href: "/messari/research/all" },
    { title: "Pro Research", href: "/messari/research/proresearch" },
    { title: "Enterprise Research", href: "/messari/research/enterprise" },
    { title: "Protocol Reporting", href: "/messari/research/protocol" },
  ],
};

export default Research;
