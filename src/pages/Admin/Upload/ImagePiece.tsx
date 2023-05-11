import React from "react";
import { Box, IconButton } from "@mui/material";
import PreviewModal from "./PreviewModal";
import { Close } from "@mui/icons-material";

const ImgPiece = (props: any) => {
  const { file, index } = props;
  const [openDialog, setOpenDialog] = React.useState(false);
  const closeDialog = () => {
    setOpenDialog(false);
  };

  const handleRemove = () => {
    props.remove(index);
  };
  return (
    <>
      <Box
        component="span"
        sx={{
          m: "5px",
          width: "130px",
          minWidth: "130px",
          height: "calc(100% - 10px)",
          border: "solid 1px #dfdada",
          borderRadius: "5px",
          position: "relative",
        }}
      >
        <img
          onClick={() => {
            if (file.type === "pdf") {
              let pdfWindow = window.open("");
              pdfWindow?.document.write(
                "<body style='margin:0'><iframe width='100%' height='100%' style='border:none' src='" +
                  file.data +
                  "'></iframe></body>"
              );
            } else setOpenDialog(true);
          }}
          // src={file.type === "pdf" ? "/images/pdf.png" : file.data}
          src={file.type === "pdf" ? "/images/pdf.png" : "/images/video.png"}
          alt={file.name}
          style={{ width: "100%", height: "100%", borderRadius: "5px" }}
        />
        <Box
          sx={{
            background: "white",
            border: "solid 1px #dfdada",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            position: "absolute",
            bottom: "0",
            left: "0",
            height: "30px",
            width: "100%",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {file.name}
        </Box>
        <Box sx={{ position: "absolute", right: "0", top: "0" }}>
          <IconButton
            onClick={handleRemove}
            aria-label="close"
            sx={{ p: "4px", backgroundColor: "white", borderRadius: "50%" }}
          >
            <Close fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <PreviewModal open={openDialog} closeDialog={closeDialog} file={file} />
    </>
  );
};

export default ImgPiece;
