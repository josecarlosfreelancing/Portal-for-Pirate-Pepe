import React, { FC } from "react";
import { CategoryProps } from "../../../types/portal";
import Category from "../../../components/Category";

const Delphi: FC = () => {
  return <Category {...delphies} />;
};

const delphies: CategoryProps = {
  content: "Delphi Digital",
  fields: [
    { title: "Research", href: "/delphi/research" },
    { title: "Media", href: "/delphi/media" },
    { title: "Library", href: "/delphi/library" },
    { title: "Analysis", href: "/delphi/analysis" },
  ],
};

export default Delphi;
