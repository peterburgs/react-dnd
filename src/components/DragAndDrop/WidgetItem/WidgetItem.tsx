import { FC } from "react";
import styles from "./WidgetItem.module.scss";
import { Widget } from "typing/widget";

interface WidgetProps {
  widget: Widget;

  handleOnDrag: (event: React.DragEvent, widget: Widget) => void;
}

const WidgetItem: FC<WidgetProps> = ({ widget, handleOnDrag }) => {
  return (
    <div
      className={styles.container}
      draggable
      onDragStart={(event) => handleOnDrag(event, widget)}
    >
      <div className={styles.square}></div>
      <div className={styles.type}>{widget.type}</div>
    </div>
  );
};

export default WidgetItem;
