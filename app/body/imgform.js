"use client";

import { useState } from "react";

export default function Imgform({ session, year, month }) {
  const [resimag, setResImg] = useState({});
  const [imagefile, setImagefile] = useState({});
  const [imgSrc, setImgSrc] = useState();

  const [resimag2, setResImg2] = useState({});
  const [imagefile2, setImagefile2] = useState({});
  const [imgSrc2, setImgSrc2] = useState();
  const [forntname, setFrontName] = useState("");
  const [sidename, setSideName] = useState("");

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
              setFrontName(filename);
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
              setSideName(filename);
              let res = await fetch("/api/post/image?file=" + filename);
              res = await res.json();
              setResImg2(res);
            }}
          />
        </div>
        <button
          onClick={() => {
            fetch("api/post/imgupload", {
              method: "POST",
              body: JSON.stringify({
                email: `${session.user.email}`,
                year: `${year}`,
                month: `${month}`,
                linkfront: `https://diet-record-images.s3.ap-northeast-2.amazonaws.com/${forntname}`,
                linkside: `https://diet-record-images.s3.ap-northeast-2.amazonaws.com/${sidename}`,
              }),
            });
          }}
        >
          입력
        </button>
      </form>
      <img src={imgSrc}></img>
      <img src={imgSrc2}></img>
    </div>
  );
}
