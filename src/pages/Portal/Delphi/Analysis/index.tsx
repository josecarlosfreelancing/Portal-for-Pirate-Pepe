import React, { FC } from "react";
import { CategoryProps } from "../../../../types/portal";
import Category from "../../../../components/Category";

const Analysis: FC = () => {
  return <Category {...analysis} />;
};

const analysis: CategoryProps = {
  content: "Analysis",
  fields: [
    { title: "NFT Sector", href: "/delphi/analysis/nft" },
    { title: "Gaming Sector", href: "/delphi/analysis/gaming" },
    { title: "DAO Activity & Coverage", href: "/delphi/analysis/dao" },
  ],
};

export default Analysis;
