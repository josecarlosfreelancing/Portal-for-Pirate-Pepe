import React, { FC } from "react";
import { CategoryProps } from "../../../types/portal";
import Category from "../../../components/Category";

const Vision: FC = () => {
  return <Category {...visions} />;
};

const visions: CategoryProps = {
  content: "Text Section",
  fields: [
    { title: "Make or Break Show", href: "/vision/break" },
    { title: "The Knitting Show", href: "/vision/knitting" },
    { title: "Investors Tutorials", href: "/vision/tutorials" },
    { title: "The Distillery", href: "/vision/distillery" },
    { title: "Community Q&A", href: "/vision/community" },
    { title: "Live Q&A", href: "/vision/live" },
    { title: "The Essential Conversation", href: "/vision/essential" },
    { title: "Actionable Ideas", href: "/vision/actionable" },
    { title: "The Real Investing Course", href: "/vision/investing" },
    { title: "Short Courses", href: "/vision/short" },
    { title: "Investor Masterclass", href: "/vision/masterclass" },
    { title: "Macro Insiders", href: "/vision/macro" },
    { title: "Deep Dive", href: "/vision/dive" },
    { title: "Trade Portfolio", href: "/vision/trade" },
    { title: "Flash Updates", href: "/vision/flash" },
    { title: "Insider Talks", href: "/vision/talks" },
    { title: "Inside the Episode", href: "/vision/episode" },
    { title: "Institutional Research", href: "/vision/institutional" },
    { title: "Insiders Chartbook", href: "/vision/chartbook" },
    { title: "Miscellaneous", href: "/vision/miscellaneous" },
  ],
};

export default Vision;
