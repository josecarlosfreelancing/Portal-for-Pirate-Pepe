import React, { FC } from "react";
import { CategoryProps } from "../../../../types/portal";
import Category from "../../../../components/Category";

const NansenRearch: FC = () => {
  return <Category {...researches} />;
};

const researches: CategoryProps = {
  content: "Research",
  fields: [
    { title: "NFTs", href: "/nansen/research/nfts" },
    { title: "Ecosystem", href: "/nansen/research/ecosystem" },
    { title: "Industry", href: "/nansen/research/industry" },
    { title: "Infrastructure", href: "/nansen/research/infrastructure" },
    { title: "Institutional", href: "/nansen/research/institutional" },
    { title: "Alpha", href: "/nansen/research/alpha" },
  ],
};

export default NansenRearch;
