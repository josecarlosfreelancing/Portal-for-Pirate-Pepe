import { Dialog } from "@mui/material";

const PreviewModal = (props: any) => {
  const { file } = props;

  return (
    <Dialog
      open={props.open}
      sx={{
        "& .MuiDialog-paper": {
          background: "transparent",
          display: "inline-table",
          maxWidth: "80%",
        },
      }}
      maxWidth="md"
      onClose={props.closeDialog}
    >
      <img
        src={file.data}
        alt={file.name}
        style={{ width: "100%", height: "100%" }}
      />
    </Dialog>
  );
};

export default PreviewModal;
