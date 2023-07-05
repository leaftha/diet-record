"use client";
import { useState } from "react";
export default function Body() {
  const [resimag, setResImg] = useState({});
  const [imagefile, setImagefile] = useState({});
  const [imgSrc, setImgSrc] = useState();

  const [resimag2, setResImg2] = useState({});
  const [imagefile2, setImagefile2] = useState({});
  const [imgSrc2, setImgSrc2] = useState();

  async function submit(e) {
    e.preventDefault();
    //S3 업로드
    let file = imagefile;
    const formData = new FormData();
    Object.entries({ ...resimag.fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });
    let result = await fetch(resimag.url, {
      method: "POST",
      body: formData,
    });

    file = imagefile2;
    const formData2 = new FormData();
    Object.entries({ ...resimag2.fields, file }).forEach(([key, value]) => {
      formData2.append(key, value);
    });
    let result2 = await fetch(resimag2.url, {
      method: "POST",
      body: formData2,
    });
    console.log(result, result2);
  }
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <lable>front</lable>
          <input
            type="file"
            name="front"
            accept="image/*"
            onChange={async (e) => {
              let file = e.target.files[0];
              setImagefile(file);
              let image = window.URL.createObjectURL(file);
              setImgSrc(image);
              console.log(image);
              let filename = encodeURIComponent(file.name);
              let res = await fetch("/api/post/image?file=" + filename);
              res = await res.json();
              setResImg(res);
            }}
          />
          <lable>Side</lable>
          <input
            type="file"
            name="side"
            accept="image/*"
            onChange={async (e) => {
              let file = e.target.files[0];
              setImagefile2(file);
              let image = window.URL.createObjectURL(file);
              setImgSrc2(image);
              console.log(image);
              let filename = encodeURIComponent(file.name);
              let res = await fetch("/api/post/image?file=" + filename);
              res = await res.json();
              setResImg2(res);
            }}
          />
        </div>
        <button>입력</button>
      </form>
      <img src={imgSrc}></img>
      <img src={imgSrc2}></img>
    </div>
  );
}
