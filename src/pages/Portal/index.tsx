import React, { FC } from "react";
import { CategoryProps } from "../../types/portal";
import Category from "../../components/Category";

const Home: FC = () => {
  return <Category {...portals} />;
};

const portals: CategoryProps = {
  content: "Text Section",
  fields: [
    { title: "Real Vision Crypto", href: "/vision" },
    { title: "Messari", href: "/messari" },
    { title: "Nansen", href: "/nansen" },
    { title: "Delphi Digital", href: "/delphi" },
  ],
};

export default Home;
