import React, { useState } from "react";
import images from "./Gallery";
import AddImages from "./AddImages";
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
  const [items, setItems] = useState(initialItems);

  const dndHandler = (results) => {
    const { source, destination } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const reordered = [...items];
    const [removed] = reordered.splice(source.index, 1);
    reordered.splice(destination.index, 0, removed);
    setItems(reordered);
    localStorage.setItem("images", JSON.stringify(reordered));
  };

  return (
    <div>
      <div className="parentadd">
        <AddImages setItems={setItems} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <DragDropContext onDragEnd={dndHandler}>
              <Droppable droppableId="root">
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="row"
                  >
                    {items.map((elem, index) => {
                      if (elem.id === "1" || elem.id === "8") {
                        return (
                          <Draggable
                            draggableId={elem.id}
                            key={elem.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="col-lg-12 col-md-12 my-2"
                              >
                                <img
                                  src={elem.source}
                                  alt={elem.id}
                                  style={{ borderRadius: "0.5rem" }}
                                  className="img-fluid"
                                />
                              </div>
                            )}
                          </Draggable>
                        );
                      } else {
                        return (
                          <Draggable
                            draggableId={elem.id}
                            key={elem.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="col-lg-6 col-md-12 my-2"
                              >
                                <Card Img={elem.source} />
                              </div>
                            )}
                          </Draggable>
                        );
                      }
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </div>
  );
}
