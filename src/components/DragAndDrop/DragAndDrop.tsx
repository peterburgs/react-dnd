import { useState } from "react";
import styles from "./DragAndDrop.module.scss";

const DragAndDrop = () => {
  const [widgets, setWidgets] = useState<string[]>([]);

  const handleOnDrag = (event: React.DragEvent, widgetType: string) => {
    event.dataTransfer.setData("widgetType", widgetType);
  };

  const handleOnDrop = (event: React.DragEvent) => {
    const widgetType = event.dataTransfer.getData("widgetType") as string;
    setWidgets([...widgets, widgetType]);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  return (
    <div className={styles.container}>
      <div className={styles.widgets}>
        <div
          className={styles.widget}
          draggable
          onDragStart={(e) => handleOnDrag(e, "widget A")}
        >
          Widget A
        </div>
        <div
          className={styles.widget}
          draggable
          onDragStart={(e) => handleOnDrag(e, "widget B")}
        >
          Widget B
        </div>
      </div>
      <div
        className={styles.dropZone}
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        {widgets.map((widget, index) => (
          <div className={styles.droppedWidget} key={index}>
            {widget}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDrop;
