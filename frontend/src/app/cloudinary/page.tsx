"use client";

import { useState } from "react";

const cloudinary = () => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  const handleOnChange = (changeEvent: any) => {
    const reader = new FileReader();

    reader.onload = (onLoadEvent: any) => {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  async function handleOnSubmit(event: any) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput: any = Array.from(form.elements).find(
      ({ name }: any) => name === "file"
    );
    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "my-uploads");
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dccidaqtf/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());
    setImageSrc(data.secure_url);
    setUploadData(data);
    console.log("data", data);
  }

  return (
    <>
      <div>
        <form onSubmit={handleOnSubmit} onChange={handleOnChange}>
          <input type="file" name="file" />
          <button type="submit">Upload</button>
          {imageSrc && !uploadData && (
            <p>
              <button>upload file</button>
            </p>
          )}
        </form>
      </div>
    </>
  );
};
export default cloudinary;
