import React, { FC } from "react";
import { CategoryProps } from "../../../../types/portal";
import Category from "../../../../components/Category";

const Media: FC = () => {
  return <Category {...medium} />;
};

const medium: CategoryProps = {
  content: "Media",
  fields: [
    { title: "Office Hours Q&A Recordings", href: "/delphi/media/office" },
    { title: "Premium Video", href: "/delphi/media/premium" },
  ],
};

export default Media;
