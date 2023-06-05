import React, { FC } from "react";
import {
  Stack,
  OutlinedInput,
  Divider,
  Grid,
  Fab,
  Box,
  Button,
  Typography,
} from "@mui/material";
// import CategorySelect from "./CategorySelect";
import ImgPiece from "./ImagePiece";
import { AddPhotoAlternate, CloudDownload } from "@mui/icons-material";
import { toast } from "react-hot-toast";
import { getDatabase, ref, set } from "firebase/database";
import {
  getStorage,
  ref as uploadRef,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { app } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const Upload: FC = () => {
  const [files, setFiles] = React.useState<any[]>([]);
  const [images, setImages] = React.useState<any[]>([]);
  const [preview, setPreview] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  // const handleDrop = (e: any) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   let formats = [
  //     ".mpg",
  //     ".mpeg",
  //     ".avi",
  //     ".wmv",
  //     ".mov",
  //     ".rm",
  //     ".ram",
  //     ".swf",
  //     ".flv",
  //     ".ogg",
  //     ".webm",
  //     ".mp4",
  //     ".pdf",
  //   ];
  //   if (e.dataTransfer.files && e.dataTransfer.files[0]) {
  //     if (
  //       formats &&
  //       [...e.dataTransfer.files].some(
  //         (file) =>
  //           !formats.some((format) =>
  //             file.name.toLowerCase().endsWith(format.toLowerCase())
  //           )
  //       )
  //     ) {
  //       toast.error(
  //         `Only following file formats are acceptable: ${formats.join(", ")}`
  //       );
  //       return;
  //     }
  //     let temp: any[] = [];
  //     let length = e.dataTransfer.files.length;
  //     [...e.dataTransfer.files].forEach((file) => {
  //       var reader = new FileReader();
  //       reader.onload = function (evt) {
  //         let fileType = "img";
  //         if (file.name.toLowerCase().endsWith(".pdf")) fileType = "pdf";
  //         temp.push({
  //           name: file.name,
  //           type: fileType,
  //           data: evt?.target?.result,
  //         });
  //         if (temp.length === length) {
  //           setFiles([...files, ...temp]);
  //         }
  //       };
  //       reader.readAsDataURL(file);
  //     });
  //   }
  // };

  // const removeElement = (index: any) => {
  //   let arr = [...files];
  //   arr.splice(index, 1);
  //   setFiles(arr);
  // };

  // const handleUploadClick = (e: any) => {
  //   let temp: any[] = [];
  //   [...e.target.files].forEach((file) => {
  //     let fileType = "img";
  //     if (file.name.toLowerCase().endsWith(".pdf")) fileType = "pdf";

  //     var reader = new FileReader();
  //     reader.onload = function (evt) {
  //       temp.push({
  //         name: file.name,
  //         type: fileType,
  //         data: evt?.target?.result,
  //       });
  //       if (temp.length === e.target.files.length)
  //         setFiles([...files, ...temp]);
  //     };
  //     reader.readAsDataURL(file);
  //   });
  // };

  // const downloadFile = () => {
  //   // const blob = new Blob([data], { type: fileType });
  //   files.map((e: any) => {
  //     const a = document.createElement("a");
  //     a.download = e.name;
  //     a.href = e.data;
  //     // a.href = window.URL.createObjectURL(blob);
  //     const clickEvt = new MouseEvent("click", {
  //       view: window,
  //       bubbles: true,
  //       cancelable: true,
  //     });
  //     a.dispatchEvent(clickEvt);
  //     a.remove();
  //     return a;
  //   });
  // };

  const handleFile = (e: any) => {
    setFiles(e.target.files);
  };

  const handleImage = (e: any) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImages(e.target.files);
    setPreview(url);
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const onChangeCategory = (categoryId: string) => {
    setCategory(categoryId);
  };

  const formatState = () => {
    setTitle("");
    setDescription("");
    setFiles([]);
    setImages([]);
    setPreview("");
    setCategory("");
  };

  const onSave = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!category) {
      toast.error(`Please select the category!`);
      return;
    }
    if (!files.length) {
      toast.error("Please upload the files!");
      return;
    }
    const storage = getStorage(app);
    const timeStamp = Date.now();

    if (!loading) {
      setLoading(true);
      uploadBytes(
        uploadRef(storage, `files/${category}/${timeStamp}`),
        files[0]
      ).then((snapshot) => {
        console.log("snapshot----------------", snapshot);

        if (images?.[0]) {
          uploadBytes(
            uploadRef(storage, `images/${category}/${timeStamp}`),
            images[0]
          ).then((image) => {
            console.log("image-------------", image);
            uploadData(timeStamp);
          });
        } else {
          uploadData(timeStamp);
        }
      });
    }
  };

  const uploadData = async (timeStamp: number) => {
    const storage = getStorage(app);

    getDownloadURL(uploadRef(storage, `files/${category}/${timeStamp}`)).then(
      (url) => {
        if (!images?.length) {
          finalUpload(timeStamp, url, "");
        } else {
          getDownloadURL(
            uploadRef(storage, `images/${category}/${timeStamp}`)
          ).then((imageUrl) => {
            finalUpload(timeStamp, url, imageUrl);
          });
        }
      }
    );
  };

  const finalUpload = async (
    timeStamp: number,
    dataUrl: string,
    imageUrl = ""
  ) => {
    const database = getDatabase(app);
    set(ref(database, `datas/${category}/${timeStamp}`), {
      title: title,
      description: description,
      files: {
        data: dataUrl,
        name: files?.[0].name,
        type: files?.[0]?.type,
      },
      images: {
        data: imageUrl,
        name: images?.[0]?.name ?? "",
        type: images?.[0]?.type ?? "",
      },
    })
      .then(() => {
        toast.success(`Successfuly Uploaded!`);
        setLoading(false);
        formatState();
      })
      .catch((error) => {
        toast.error(error);
        setLoading(false);
      });
  };

  return (
    <Box>
      <Stack gap={4} component="form" onSubmit={onSave}>
        <Stack
          flexDirection={{ md: "row", sm: "column", xs: "column" }}
          gap={4}
        >
          <OutlinedInput
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
            required
            disabled={loading}
          />
          {/* <CategorySelect onChange={onChangeCategory} value={category} /> */}
        </Stack>

        <fieldset style={{ borderColor: "#3b423b", borderRadius: 4 }}>
          <Typography variant="body1" color="text.secondary" pt={1}>
            Please upload the files.
          </Typography>
          <Stack gap={1} pt={2}>
            <Stack flexDirection="row" alignItems="center" gap={2}>
              <Button
                startIcon={<AddIcon fontSize="small" />}
                variant="outlined"
                color="success"
                component="label"
                disabled={loading}
                size="small"
              >
                {files?.[0] ? "Change File" : "Select File"}
                <input
                  type="file"
                  accept="video/*,.pdf"
                  hidden
                  name="file"
                  onChange={handleFile}
                />
              </Button>
              <Typography color="text.secondary">
                {files[0]?.name ?? "No file chosen"}
              </Typography>
            </Stack>
            <Box py={2}>
              <Divider sx={{ borderColor: "#3b423b" }} />
            </Box>
            <Typography color="text.secondary" variant="body2">
              Please attach preview image. This is optional.
            </Typography>
            <Stack flexDirection="row" alignItems="center" gap={2} py={2}>
              <Button
                startIcon={<AddPhotoAlternateIcon fontSize="small" />}
                variant="outlined"
                size="small"
                component="label"
                color="success"
                disabled={loading}
              >
                {images?.[0] ? "Change Image" : "Attach Image"}
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  name="file"
                  onChange={handleImage}
                />
              </Button>
              <Typography color="text.secondary">
                {images[0]?.name ?? "No file chosen"}
              </Typography>
            </Stack>
            <Stack>
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: 260,
                  height: 260,
                  borderRadius: 2,
                  p: 2,
                  border: `1px solid`,
                  borderColor: "divider",
                }}
              >
                  <Box
                    component="img"
                    src={preview ? preview : "/images/election.png"}
                    sx={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
              
              </Stack>
            </Stack>
          </Stack>
        </fieldset>
        {/* <Grid item xs={12} sx={{ height: "200px", display: "flex" }}>
          <Box
            sx={{
              "& > :not(style)": { m: 1 },
              width: "80px",
              my: "auto",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexFlow: "column",
            }}
          >
            <label htmlFor="contained-button-file">
              <input
                accept="video/*,.pdf"
                id="contained-button-file"
                multiple
                type="file"
                style={{ display: "none" }}
                onChange={handleUploadClick}
              />
              <Fab component="span" sx={{ zIndex: 0 }}>
                <AddPhotoAlternate />
              </Fab>
            </label>
            <Fab component="span" sx={{ zIndex: 0 }} onClick={downloadFile}>
              <CloudDownload />
            </Fab>
          </Box>
          <Box
            sx={{
              width: "calc(100% - 80px)",
              overflow: "auto",
              minWidth: "calc(100% - 80px)",
              border: "dashed 1px grey",
              display: "flex",
            }}
            onDrop={handleDrop}
          >
            {files.map((ele, index) => {
              return (
                <ImgPiece
                  file={ele}
                  key={index}
                  index={index}
                  remove={removeElement}
                />
              );
            })}
          </Box>
        </Grid> */}
        <OutlinedInput
          placeholder="Description"
          multiline
          rows={5}
          value={description}
          onChange={onChangeDescription}
          disabled={loading}
        />
        <Divider />
        <Stack flexDirection="row" gap={4} justifyContent="flex-end">
          <Button color="success" type="submit" disabled={loading}>
            Save
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => navigate("/admin")}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Upload;
