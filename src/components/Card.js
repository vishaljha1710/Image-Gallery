import React from "react";

export default function Card({ Img }) {
  return (
    <div>
      <div
        className="bg-success m-3 d-flex align-items-center justify-content-center"
        style={{
          width: "100%",
          maxWidth: "30rem",
          maxHeight: "30rem",
          margin: "0 auto",
          aspectRatio: "1 / 1",
          borderRadius: "10%",
        }}
      >
        <img
          src={Img}
          style={{ width: "90%", height: "90%", borderRadius: "10%" }}
        />
      </div>
    </div>
  );
}
