import React, { FC } from "react";
import { Stack } from "@mui/material";
import PirateCard from "../../components/PirateCard";
import { cards } from "./constant";

const Pirate: FC = () => {
  return (
    <Stack
      flexDirection={{ md: "row", sm: "column", xs: "column" }}
      gap={{ md: 2, sm: 7, xs: 7 }}
      pt={7}
      pb={10}
    >
      {cards.map((ele: any, key: number) => (
        <PirateCard key={key} {...ele} />
      ))}
    </Stack>
  );
};

export default Pirate;
