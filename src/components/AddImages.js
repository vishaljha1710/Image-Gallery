import React, { useRef } from "react";

export default function AddImages({ setItems }) {
  const inputref = useRef(null);
  const addfile = () => {
    inputref.current.click();
  };
  return (
    <div className="add" onClick={addfile}>
      <input
        type="file"
        ref={inputref}
        placeholder="Add"
        style={{ display: "none" }}
      />
      Add Module
    </div>
  );
}
