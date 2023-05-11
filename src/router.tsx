import React, { FC, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Portal";
import PortalLayout from "./layouts/PortalLayout";
import Vision from "./pages/Portal/Vision";
import Messari from "./pages/Portal/Messari";
import Nansen from "./pages/Portal/Nansen";
import Delphi from "./pages/Portal/Delphi";
import Break from "./pages/Portal/Vision/Break";
import Knitting from "./pages/Portal/Vision/Knitting";
import Tutorials from "./pages/Portal/Vision/Tutorials";
import Distillery from "./pages/Portal/Vision/Distillery";
import Community from "./pages/Portal/Vision/Community";
import Live from "./pages/Portal/Vision/Live";
import Essential from "./pages/Portal/Vision/Essential";
import Actionable from "./pages/Portal/Vision/Actionable";
import Investing from "./pages/Portal/Vision/Investing";
import Short from "./pages/Portal/Vision/Short";
import Masterclass from "./pages/Portal/Vision/Masterclass";
import Macro from "./pages/Portal/Vision/Macro";
import Dive from "./pages/Portal/Vision/Dive";
import Trade from "./pages/Portal/Vision/Trade";
import Flash from "./pages/Portal/Vision/Flash";
import Talks from "./pages/Portal/Vision/Talks";
import Episode from "./pages/Portal/Vision/Episode";
import Institutional from "./pages/Portal/Vision/Institutional";
import Chartbook from "./pages/Portal/Vision/Chartbook";
import Miscellaneous from "./pages/Portal/Vision/Miscellaneous";
import Research from "./pages/Portal/Messari/Research";
import All from "./pages/Portal/Messari/Research/All";
import Pro from "./pages/Portal/Messari/Research/Pro";
import Enterprise from "./pages/Portal/Messari/Research/Enterprise/indext";
import Protocol from "./pages/Portal/Messari/Research/Protocol";
import Intel from "./pages/Portal/Messari/Intel";
import List from "./pages/Portal/Messari/Intel/List";
import Grid from "./pages/Portal/Messari/Intel/Grid";
import Calendar from "./pages/Portal/Messari/Intel/Calendar";
import News from "./pages/Portal/Messari/News";
import NansenRearch from "./pages/Portal/Nansen/Research";
import NFTs from "./pages/Portal/Nansen/Research/Nfts";
import Ecosystem from "./pages/Portal/Nansen/Research/Ecosystem";
import Industry from "./pages/Portal/Nansen/Research/Industry";
import Infrastructure from "./pages/Portal/Nansen/Research/Infrastructure";
import Alpha from "./pages/Portal/Nansen/Research/Alpha";
import Wallet from "./pages/Portal/Nansen/Wallet";
import War from "./pages/Portal/Nansen/War";
import DelphiRearch from "./pages/Portal/Delphi/Research";
import DaoInsight from "./pages/Portal/Delphi/Research/Dao";
import DeepDives from "./pages/Portal/Delphi/Research/Dive";
import MarketInsight from "./pages/Portal/Delphi/Research/Insight";
import Market from "./pages/Portal/Delphi/Research/Market";
import Newsletter from "./pages/Portal/Delphi/Research/Newsletter";
import NFT from "./pages/Portal/Delphi/Research/NFT";
import ProtocolDives from "./pages/Portal/Delphi/Research/Protocol";
import Yield from "./pages/Portal/Delphi/Research/Yield";
import Media from "./pages/Portal/Delphi/Media";
import Office from "./pages/Portal/Delphi/Media/Office";
import Premium from "./pages/Portal/Delphi/Media/Premium";
import Library from "./pages/Portal/Delphi/Library";
import Analysis from "./pages/Portal/Delphi/Analysis";
import AnalysisNFT from "./pages/Portal/Delphi/Analysis/NFT";
import AnalysisDao from "./pages/Portal/Delphi/Analysis/Dao";
import Gaming from "./pages/Portal/Delphi/Analysis/Gaming";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Admin";
import Upload from "./pages/Admin/Upload";

const Router: FC = () => {
  const routes: RouteObject[] = [
    { path: "/", element: <Welcome /> },
    {
      path: "/",
      element: <PortalLayout />,
      children: [
        { path: "home", element: <Home /> },
        {
          path: "vision",
          children: [
            { path: "", element: <Vision /> },
            { path: "break", element: <Break /> },
            { path: "knitting", element: <Knitting /> },
            { path: "tutorials", element: <Tutorials /> },
            { path: "distillery", element: <Distillery /> },
            { path: "community", element: <Community /> },
            { path: "live", element: <Live /> },
            { path: "essential", element: <Essential /> },
            { path: "actionable", element: <Actionable /> },
            { path: "investing", element: <Investing /> },
            { path: "short", element: <Short /> },
            { path: "masterclass", element: <Masterclass /> },
            { path: "macro", element: <Macro /> },
            { path: "dive", element: <Dive /> },
            { path: "trade", element: <Trade /> },
            { path: "flash", element: <Flash /> },
            { path: "talks", element: <Talks /> },
            { path: "episode", element: <Episode /> },
            { path: "institutional", element: <Institutional /> },
            { path: "chartbook", element: <Chartbook /> },
            { path: "miscellaneous", element: <Miscellaneous /> },
          ],
        },
        {
          path: "messari",
          children: [
            { path: "", element: <Messari /> },
            {
              path: "research",
              children: [
                { path: "", element: <Research /> },
                { path: "proresearch", element: <Pro /> },
                { path: "all", element: <All /> },
                { path: "enterprise", element: <Enterprise /> },
                { path: "protocol", element: <Protocol /> },
              ],
            },
            {
              path: "intel",
              children: [
                { path: "", element: <Intel /> },
                { path: "list", element: <List /> },
                { path: "grid", element: <Grid /> },
                { path: "calendar", element: <Calendar /> },
              ],
            },
            { path: "news", element: <News /> },
          ],
        },
        {
          path: "nansen",
          children: [
            { path: "", element: <Nansen /> },
            {
              path: "research",
              children: [
                { path: "", element: <NansenRearch /> },
                { path: "nfts", element: <NFTs /> },
                { path: "ecosystem", element: <Ecosystem /> },
                { path: "industry", element: <Industry /> },
                { path: "infrastructure", element: <Infrastructure /> },
                { path: "institutional", element: <Institutional /> },
                { path: "alpha", element: <Alpha /> },
              ],
            },
            { path: "wallet", element: <Wallet /> },
            { path: "war", element: <War /> },
          ],
        },
        {
          path: "delphi",
          children: [
            { path: "", element: <Delphi /> },
            {
              path: "research",
              children: [
                { path: "", element: <DelphiRearch /> },
                { path: "dao", element: <DaoInsight /> },
                { path: "dive", element: <DeepDives /> },
                { path: "insight", element: <MarketInsight /> },
                { path: "market", element: <Market /> },
                { path: "newsletter", element: <Newsletter /> },
                { path: "nft", element: <NFT /> },
                { path: "protocol", element: <ProtocolDives /> },
                { path: "yield", element: <Yield /> },
              ],
            },
            {
              path: "media",
              children: [
                { path: "", element: <Media /> },
                { path: "office", element: <Office /> },
                { path: "premium", element: <Premium /> },
              ],
            },
            { path: "library", element: <Library /> },
            {
              path: "analysis",
              children: [
                { path: "", element: <Analysis /> },
                { path: "nft", element: <AnalysisNFT /> },
                { path: "dao", element: <AnalysisDao /> },
                { path: "gaming", element: <Gaming /> },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <Upload />,
        },
        {
          path: "upload",
          element: <Upload />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};

export default Router;
