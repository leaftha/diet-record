"use client";

import { useState } from "react";
import classes from "./imgform.module.css";

export default function Imgform({ session, year, month }) {
  const [resimag, setResImg] = useState({});
  const [isImg, setIsImg] = useState(false);
  const [imagefile, setImagefile] = useState({});
  const [imgSrc, setImgSrc] = useState();

  const [resimag2, setResImg2] = useState({});
  const [imagefile2, setImagefile2] = useState({});
  const [isImg2, setIsImg2] = useState(false);

  const [imgSrc2, setImgSrc2] = useState();
  const [forntname, setFrontName] = useState("");
  const [sidename, setSideName] = useState("");

  async function submit(e) {
    if (isImg && isImg2) {
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
    } else {
      alert("이미지를 두개 모두 선택해주십시요");
    }
  }
  return (
    <div className={classes.main}>
      <form className={classes.form} onSubmit={submit}>
        <label htmlFor="input-front" className={classes.label}>
          front
        </label>
        <input
          className={classes.inputimg}
          type="file"
          id="input-front"
          name="front"
          accept="image/*"
          onChange={async (e) => {
            let file = e.target.files[0];
            setImagefile(file);
            setIsImg(true);
            let image = window.URL.createObjectURL(file);
            setImgSrc(image);
            let filename = encodeURIComponent(file.name + year + month);
            setFrontName(filename);
            let res = await fetch("/api/post/image?file=" + filename);
            res = await res.json();
            setResImg(res);
          }}
        />
        <label htmlFor="input-side" className={classes.label}>
          Side
        </label>
        <input
          className={classes.inputimg}
          id="input-side"
          type="file"
          name="side"
          accept="image/*"
          onChange={async (e) => {
            let file = e.target.files[0];
            setImagefile2(file);
            setIsImg2(true);
            let image = window.URL.createObjectURL(file);
            setImgSrc2(image);
            let filename = encodeURIComponent(file.name + year + month);
            setSideName(filename);
            let res = await fetch("/api/post/image?file=" + filename);
            res = await res.json();
            setResImg2(res);
          }}
        />
        <button
          className={classes.btn}
          onClick={() => {
            if (isImg && isImg2) {
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
            }
          }}
        >
          입력
        </button>
      </form>
      <div className={classes.sample}>
        <div className={classes.samplefornt}>
          <span>front</span>
          <img className={classes.sampleimg} src={imgSrc} />
        </div>
        <div className={classes.samplefornt}>
          <span>side</span>
          <img className={classes.sampleimg} src={imgSrc2} />
        </div>
      </div>
    </div>
  );
}
