import React, { FC } from "react";
import { CategoryProps } from "../../../../types/portal";
import Category from "../../../../components/Category";

const DelphiRearch: FC = () => {
  return <Category {...researches} />;
};

const researches: CategoryProps = {
  content: "Research",
  fields: [
    { title: "DAO Insights", href: "/delphi/research/dao" },
    { title: "Deep Dives", href: "/delphi/research/dive" },
    { title: "Market Insights", href: "/delphi/research/insight" },
    { title: "Market Updates", href: "/delphi/research/market" },
    { title: "Daily Newsletter", href: "/delphi/research/newsletter" },
    { title: "NFT insights", href: "/delphi/research/nft" },
    { title: "Protocol Dives", href: "/delphi/research/protocol" },
    { title: "Yield Insights", href: "/delphi/research/yield" },
  ],
};

export default DelphiRearch;
