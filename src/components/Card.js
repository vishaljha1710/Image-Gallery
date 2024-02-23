import React from "react";

export default function Card({ Img }) {
  return (
    <div
      className=""
      style={{
        margin: "0 auto",
        maxWidth: "41rem",
        borderRadius: "10%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={Img}
        style={{ display: "block", width: "100%", borderRadius: "2%" }}
        alt="Module"
      />
    </div>
  );
}
