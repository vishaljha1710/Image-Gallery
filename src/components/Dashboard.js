import React, { useState } from "react";
import images from "./Gallery";
import Card from "./Card";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

  const dndhandler = (results) => {
    const { source, destination, type } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const reordered = [...items];
    const [removed] = reordered.splice(source.index, 1);
    reordered.splice(destination.index, 0, removed);
    setitems(reordered);
    localStorage.setItem("images", JSON.stringify(items));

    console.log(items);
    return;
  };

  return (
    <div className="container">
      <DragDropContext onDragEnd={dndhandler}>
        <div className="row">
          <Droppable droppableId="root">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="row"
              >
                {items.map((elem, index) => (
                  <Draggable draggableId={elem.id} key={elem.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={elem.id}
                        className="col-lg-4 col-md-6 col-sm-12 my-3"
                      >
                        <Card Img={elem.source} />
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}
