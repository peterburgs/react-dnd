import DropZone from "components/DragAndDrop/DropZone/DropZone";
import WidgetDetails from "components/DragAndDrop/WidgetDetails/WidgetDetails";
import WidgetItem from "components/DragAndDrop/WidgetItem/WidgetItem";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { defaultWidgets } from "typing/constants";
import { Widget } from "typing/widget";
import { addWidget, setDraggingWidgetType } from "store/widgetSlice";
import styles from "./AdminPanel.module.scss";
import { generateId } from "utils/generateId";

const AdminPanel: FC = () => {
  const dispatch = useDispatch();

  const handleOnDrag = (event: React.DragEvent, widget: Widget) => {
    dispatch(setDraggingWidgetType(widget.type));
    event.dataTransfer.setData(
      "widget",
      JSON.stringify({ ...widget, id: generateId() })
    );
  };

  const handleOnDrop = (event: React.DragEvent) => {
    dispatch(setDraggingWidgetType(undefined));

    const rawWidget = event.dataTransfer.getData("widget");
    if (rawWidget) {
      const widget = JSON.parse(rawWidget);
      dispatch(addWidget(widget));
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <WidgetItem widget={defaultWidgets[0]} handleOnDrag={handleOnDrag} />
        <WidgetItem widget={defaultWidgets[1]} handleOnDrag={handleOnDrag} />
      </div>
      <div className={styles.dropZoneContainer}>
        <DropZone handleOnDrop={handleOnDrop} handleDragOver={handleDragOver} />
        <WidgetDetails />
      </div>
    </div>
  );
};

export default AdminPanel;
