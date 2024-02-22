import React, { useState } from "react";
import images from "./Gallery";
import Card from "./Card";

export default function Dashboard() {
  let storedImages = localStorage.getItem("images");
  let initialItems;
  if (storedImages && JSON.parse(storedImages).length > 0) {
    initialItems = JSON.parse(storedImages);
  } else {
    initialItems = images;
  }

  const [items, setitems] = useState(initialItems);
  localStorage.setItem("images", JSON.stringify(items));
  return (
    <div className="container">
      <div className="row">
        {items.map((elem) => {
          const { id, source } = elem;
          return (
            <div key={id} className="col-lg-4 col-md-6 col-sm-12 my-3">
              <Card Img={source} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
