import React, { FC } from "react";
import { Box, Stack, Typography, Link, Divider } from "@mui/material";
import { ViewProps } from "../types/portal";
import { app } from "../config/firebase";
import { getDatabase, ref, get } from "firebase/database";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import CommentIcon from "@mui/icons-material/Comment";

const View: FC<ViewProps> = (props) => {
  const [views, setViews] = React.useState<any[]>([]);
  const [state, setState] = React.useState<number>(0);

  React.useEffect(() => {
    const db = getDatabase(app);
    const dataRef = ref(db, `datas/${props.categoryId}`);
    const datas: any[] = [];

    if (props.categoryId) {
      get(dataRef).then((snapshot) => {
        if (snapshot.exists()) {
          datas.push(...Object.values(snapshot.val()));
        }
        setViews(datas);
        setState(1);
      });
    }
  }, [props.categoryId]);

  return (
    <Box>
      <Stack gap={{ md: 4, sm: 2, xs: 2 }}>
        <Box
          sx={{
            border: "1px solid",
            borderColor: "#3b423b",
            borderRadius: 2,
            p: { md: 4, sm: 2, xs: 2 },
          }}
        >
          <Typography textTransform="uppercase" textAlign="center" variant="h1">
            Top Pirate Pepe Banner
          </Typography>
        </Box>
        {/* <Box
          sx={{
            border: "4px solid #fff",
            p: { md: 2, sm: 1, xs: 1 },
          }}
        > */}
        <Box>
          <Typography textTransform="uppercase" variant="h3">
            {props.title}
          </Typography>
          <Box py={1}>
            <Divider sx={{ borderColor: "#3b423b" }} />
          </Box>
        </Box>
        {/* </Box> */}
        {state === 1 && views.length === 0 ? (
          <Stack alignItems="center" justifyContent="center">
            <Box pt={8} pb={2}>
              <Box component="img" src="/images/empty.png" />
            </Box>
            <Typography variant="h4" color="text.secondary">
              There is no item in this category.
            </Typography>
          </Stack>
        ) : (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                lg: "repeat(4, 1fr)",
                md: "repeat(3, 1fr)",
                sm: "repeat(2, 1fr)",
                xs: "repeat(1, 1fr)",
              },
              gap: 2,
            }}
          >
            {views.map((ele: any, key: number) => (
              <Box
                key={key}
                sx={{
                  border: "1px solid",
                  borderColor: "#3b423b",
                  borderRadius: 2,
                }}
              >
                <Box>
                  <Box
                    borderBottom="1px solid"
                    borderColor="#3b423b"
                    height={{ md: 160, lg: '13vw', sm: '30vw', xs: '50vw' }}
                    p={1}
                  >
                    <Box
                      sx={{
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Box
                        src={
                          ele?.images?.data
                            ? ele?.images?.data
                            : "/images/election.png"
                        }
                        component="img"
                        sx={{
                          width: "100%",
                          height: "100%",
                          transition: "1s",
                          cursor: "pointer",
                          "&: hover": {
                            transform: "scale(1.2)",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box p={1} py={1.5}>
                  <Stack flexDirection="row" alignItems="flex-start" gap={1}>
                    {ele.files?.type?.includes("pdf") ? (
                      <PictureAsPdfIcon fontSize="small" />
                    ) : (
                      <SmartDisplayIcon fontSize="small" />
                    )}
                    <Typography
                      textTransform="uppercase"
                      textAlign="left"
                      variant="h6"
                      lineHeight={1}
                      color="text.primary"
                    >
                      {ele.title}
                    </Typography>
                  </Stack>
                  {ele.files ? (
                    <Stack
                      pt={1}
                      flexDirection="row"
                      alignItems="flex-start"
                      gap={1}
                    >
                      <CloudDownloadIcon fontSize="small" />
                      <Link
                        href={ele?.files?.data}
                        target="_blank"
                        download={ele?.files?.name}
                      >
                        {ele?.files?.name}
                      </Link>
                    </Stack>
                  ) : (
                    <></>
                  )}
                  {ele.description ? (
                    <Stack
                      flexDirection="row"
                      alignItems="flex-start"
                      gap={1}
                      pt={1}
                    >
                      <CommentIcon fontSize="small" />
                      <Typography color="text.secondary" variant="caption">
                        {ele.description}
                      </Typography>
                    </Stack>
                  ) : (
                    <></>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Stack>
      <Stack></Stack>
    </Box>
  );
};

export default View;
