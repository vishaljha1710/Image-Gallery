import React, { useState } from "react";
import images from "./Gallery";
import AddImages from "./AddImages";
import Card from "./Card";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Dashboard() {
  let storedImages = localStorage.getItem("images");
  const [items, setItems] = useState(
    storedImages ? JSON.parse(storedImages) : []
  );

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
        <AddImages items={items} setItems={setItems} />
        <div
          className="add"
          onClick={() => {
            setItems(images);
          }}
        >
          Add all modues
        </div>
      </div>
      {items.length > 0 ? (
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
                        if (
                          elem.name === "001.png" ||
                          elem.name === "008.png"
                        ) {
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
      ) : (
        <div>
          <div className="nothing">
            No items to display.
            <br />
            Try adding some modules
          </div>
        </div>
      )}
    </div>
  );
}
