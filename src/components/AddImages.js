import React, { useRef } from "react";

export default function AddImages({ items, setItems }) {
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const newItem = {
      id:
        items.length > 0 ? String(Number(items[items.length - 1].id) + 1) : "1",
      name: file.name,
      source: URL.createObjectURL(file),
    };

    setItems((prevItems) => [...prevItems, newItem]);
    localStorage.setItem("images", JSON.stringify([...items, newItem]));
  };

  const addFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="add" onClick={addFile}>
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      Add Module
    </div>
  );
}
