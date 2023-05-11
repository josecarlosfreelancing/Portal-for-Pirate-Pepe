import React, { FC } from "react";
import { CategoryProps } from "../../../types/portal";
import Category from "../../../components/Category";

const Nansen: FC = () => {
  return <Category {...nansens} />;
};

const nansens: CategoryProps = {
  content: "Nansen",
  fields: [
    { title: "Wallet & Token Watchlists", href: "/nansen/wallet" },
    { title: "Research", href: "/nansen/research" },
    { title: "War Room Notes", href: "/nansen/war" },
  ],
};

export default Nansen;
